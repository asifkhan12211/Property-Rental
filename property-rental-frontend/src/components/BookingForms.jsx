import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { propertyData } from '../data/propertyData';

const BookingForm = ({ selectedProperty, onClose }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState(selectedProperty ? selectedProperty.id : '');
  const [formData, setFormData] = useState({
    propertyName: selectedProperty ? selectedProperty.name : '',
    checkInDate: '',
    checkOutDate: '',
    userName: '',
    userEmail: '',
    userPhone: '',
    message: '',
    totalPrice: selectedProperty ? selectedProperty.price : 0,
    numberOfGuests: 1
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          toast.error('Please login to make a booking');
          navigate('/login');
          return;
        }

        const response = await axios.get('http://localhost:7000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.success) {
          const { name, email, phone } = response.data.user;
          setFormData(prev => ({
            ...prev,
            userName: name || '',
            userEmail: email || '',
            userPhone: phone || ''
          }));
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        toast.error('Error loading user details');
      }
    };

    fetchUserDetails();
  }, [navigate]);

  // Handle property selection
  const handlePropertySelect = (e) => {
    const property = propertyData.find(p => p.id === e.target.value);
    setSelectedPropertyId(e.target.value);
    if (property) {
      setFormData(prev => ({
        ...prev,
        propertyName: property.name,
        totalPrice: property.price
      }));
    }
  };

  const getMinCheckoutDate = () => {
    if (!formData.checkInDate) return '';
    const nextDay = new Date(formData.checkInDate);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay.toISOString().split('T')[0];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please login to make a booking');
        navigate('/login');
        return;
      }

      const currentProperty = selectedProperty || propertyData.find(p => p.id === selectedPropertyId);
      if (!currentProperty) {
        toast.error('Please select a property');
        return;
      }

      // Validate number of guests
      if (formData.numberOfGuests > currentProperty.maxGuests) {
        toast.error(`Maximum ${currentProperty.maxGuests} guests allowed for this property`);
        return;
      }

      const response = await axios.post(
        'http://localhost:7000/api/bookings/create',
        {
          ...formData,
          propertyDetails: {
            ...currentProperty,
            totalPrice: formData.totalPrice
          }
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.success) {
        toast.success('Booking created successfully! Your booking ID is: ' + response.data.booking.bookingId);
        if (onClose) onClose();
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Booking error:', error);
      toast.error(error.response?.data?.message || 'Error creating booking');
    } finally {
      setLoading(false);
    }
  };

  // Get current property details
  const currentProperty = selectedProperty || propertyData.find(p => p.id === selectedPropertyId);

  return (
    <>
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Property Selection - Only show if no property is pre-selected */}
        {!selectedProperty && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Property</label>
            <select
              value={selectedPropertyId}
              onChange={handlePropertySelect}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Choose a property</option>
              {propertyData.map((property) => (
                <option key={property.id} value={property.id}>
                  {property.name} - {property.location}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Property Details - Show if property is selected */}
        {currentProperty && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Property Image */}
              <div className="md:w-1/3">
                <img
                  src={currentProperty.images[0]}
                  alt={currentProperty.name}
                  className="w-full h-48 object-cover rounded-lg shadow-sm"
                />
              </div>
              
              {/* Property Info */}
              <div className="md:w-2/3">
                <h3 className="font-semibold text-gray-900 mb-2 text-xl">{currentProperty.name}</h3>
                <p className="text-gray-600 mb-2">{currentProperty.location}</p>
                <p className="text-gray-800 font-medium mb-3">₹{currentProperty.price} per night</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <p>Bedrooms: {currentProperty.bedrooms}</p>
                  <p>Bathrooms: {currentProperty.bathrooms}</p>
                  <p>Max Guests: {currentProperty.maxGuests}</p>
                  <p>Type: {currentProperty.type}</p>
                </div>
                {currentProperty.description && (
                  <p className="mt-3 text-gray-600 text-sm">{currentProperty.description}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
            <input
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
            <input
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              min={getMinCheckoutDate()}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Number of Guests */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
          <input
            type="number"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            min="1"
            max={currentProperty ? currentProperty.maxGuests : 1}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          {currentProperty && (
            <p className="text-sm text-gray-500 mt-1">Maximum {currentProperty.maxGuests} guests allowed</p>
          )}
        </div>

        {/* Guest Details */}
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="userPhone"
              value={formData.userPhone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Price Summary */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-gray-900 mb-2">Price Summary</h3>
          <div className="text-sm text-gray-600">
            <p>Price per night: ₹{formData.totalPrice}</p>
            {formData.checkInDate && formData.checkOutDate && (
              <p className="font-medium text-gray-900 mt-2">
                Total Price: ₹{formData.totalPrice * Math.max(1, Math.floor((new Date(formData.checkOutDate) - new Date(formData.checkInDate)) / (1000 * 60 * 60 * 24)))}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? 'Creating Booking...' : 'Book Now'}
        </button>
      </form>
    </div>
    </>
  );
};

export default BookingForm;
