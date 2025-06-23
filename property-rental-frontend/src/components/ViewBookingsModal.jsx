import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FiX, FiCalendar, FiUser, FiPhone, FiDollarSign } from 'react-icons/fi';
import { propertyData } from '../data/propertyData';

const ViewBookingsModal = ({ isOpen, onClose }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      fetchBookings();
    }
  }, [isOpen]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please login to view bookings');
        navigate('/login');
        return;
      }

      const response = await axios.get('http://localhost:7000/api/bookings/my-bookings', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        // Enhance bookings with property images
        const enhancedBookings = response.data.bookings.map(booking => {
          const property = propertyData.find(p => p.name === booking.propertyName);
          return {
            ...booking,
            propertyImage: property?.images?.[0] || null
          };
        });
        setBookings(enhancedBookings);
      }
    } catch (error) {
      console.error('Fetch bookings error:', error);
      toast.error(error.response?.data?.message || 'Error fetching bookings');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) return;
    
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please login to cancel booking');
        navigate('/login');
        return;
      }

      const response = await axios.put(
        `http://localhost:7000/api/bookings/cancel/${bookingId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.success) {
        toast.success('Booking cancelled successfully');
        fetchBookings(); // Refresh the bookings list
      }
    } catch (error) {
      console.error('Cancel booking error:', error);
      toast.error(error.response?.data?.message || 'Error cancelling booking');
    }
  };

  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case 'confirmed':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'cancelled':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
    }
  };

  if (!isOpen) return null;

  return (
    <div className=" z-50 fixed top-0 left-0 flex w-full h-screen items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white  shadow-xl w-full  h-screen overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">My Bookings</h2>
            <p className="text-sm text-gray-500">View and manage your property reservations</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md bg-black text-white hover:bg-gray-400 cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-12 pb-16">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-gray-600">Loading your bookings...</p>
            </div>
          ) : bookings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <FiCalendar className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-700">No bookings found</h3>
              <p className="text-gray-500 mt-1">You don't have any bookings yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Property Image */}
                    <div className="md:w-1/3">
                      {booking.propertyImage ? (
                        <img
                          src={booking.propertyImage}
                          alt={booking.propertyName}
                          className="w-full h-48 object-cover"
                        />
                      ) : (
                        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                          <FiHome className="w-12 h-12 text-gray-400" />
                        </div>
                      )}
                    </div>

                    {/* Booking Details */}
                    <div className="md:w-2/3 p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{booking.propertyName}</h3>
                          <p className="text-sm text-gray-500">Booking ID: {booking.bookingId}</p>
                        </div>
                        <span className={getStatusBadge(booking.status)}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                        <div className="flex items-center">
                          <FiCalendar className="mr-2 text-gray-400" />
                          <div>
                            <p className="text-gray-500">Check-in</p>
                            <p>{new Date(booking.checkInDate).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <FiCalendar className="mr-2 text-gray-400" />
                          <div>
                            <p className="text-gray-500">Check-out</p>
                            <p>{new Date(booking.checkOutDate).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <FiUser className="mr-2 text-gray-400" />
                          <div>
                            <p className="text-gray-500">Guest</p>
                            <p>{booking.userName}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <FiPhone className="mr-2 text-gray-400" />
                          <div>
                            <p className="text-gray-500">Contact</p>
                            <p>{booking.userPhone || 'Not provided'}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-3 border-t">
                        <div className="flex items-center">
                          <p className="font-semibold">Total: ₹{booking.totalPrice.toLocaleString()}</p>
                        </div>
                        {booking.status === 'confirmed' && (
                          <button
                            onClick={() => handleCancelBooking(booking._id)}
                            className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                          >
                            Cancel Booking
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewBookingsModal;