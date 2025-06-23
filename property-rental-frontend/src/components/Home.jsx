import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { propertyData } from '../data/propertyData';
import { FaHome, FaKey, FaStar, FaMapMarkerAlt, FaPhone, FaCheckCircle } from 'react-icons/fa';

const Home = () => {
  // Get featured properties (first 3)
  const featuredProperties = propertyData.slice(0, 3);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div
        className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
        style={{ backgroundImage: "url('/header_img.png')" }}
        id='Home'
      >
        <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
          <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block font-bold mb-6'>
            Find Your Dream Home
          </h2>
          <p className='text-xl md:text-2xl mb-8'>
            Discover the perfect property that matches your lifestyle
          </p>
          <Link
            to='/projects'
            className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block'
          >
            Browse Properties
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h3 className='text-3xl md:text-4xl font-bold text-center mb-12'>
            Why Choose Us
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center p-6 bg-white rounded-lg shadow-lg'>
              <FaHome className='text-4xl text-blue-600 mx-auto mb-4' />
              <h4 className='text-xl font-semibold mb-3'>Premium Properties</h4>
              <p className='text-gray-600'>
                Handpicked luxury properties in prime locations
              </p>
            </div>
            <div className='text-center p-6 bg-white rounded-lg shadow-lg'>
              <FaKey className='text-4xl text-blue-600 mx-auto mb-4' />
              <h4 className='text-xl font-semibold mb-3'>Easy Booking</h4>
              <p className='text-gray-600'>
                Simple and secure booking process
              </p>
            </div>
            <div className='text-center p-6 bg-white rounded-lg shadow-lg'>
              <FaStar className='text-4xl text-blue-600 mx-auto mb-4' />
              <h4 className='text-xl font-semibold mb-3'>5-Star Service</h4>
              <p className='text-gray-600'>
                24/7 support and premium amenities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className='py-16'>
        <div className='container mx-auto px-4'>
          <h3 className='text-3xl md:text-4xl font-bold text-center mb-12'>
            Featured Properties
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {featuredProperties.map((property) => (
              <div key={property.id} className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <img
                  src={property.images[0]}
                  alt={property.name}
                  className='w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h4 className='text-xl font-semibold mb-2'>{property.name}</h4>
                  <p className='text-gray-600 mb-2 flex items-center'>
                    <FaMapMarkerAlt className='mr-2' /> {property.location}
                  </p>
                  <p className='text-2xl font-bold text-blue-600 mb-4'>
                    ₹{property.price} / night
                  </p>
                  <div className='grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600'>
                    <p>🛏️ {property.bedrooms} Bedrooms</p>
                    <p>🚿 {property.bathrooms} Bathrooms</p>
                    <p>👥 Up to {property.maxGuests} Guests</p>
                    <p>📍 {property.type}</p>
                  </div>
                  <Link
                    to={`/property/${property.id}`}
                    className='block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors'
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className='text-center mt-8'>
            <Link
              to='/projects'
              className='inline-block bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg transition-colors'
            >
              View All Properties
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h3 className='text-3xl md:text-4xl font-bold text-center mb-12'>
            Benefits of Booking With Us
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex items-start p-6 bg-white rounded-lg shadow-lg'>
              <FaCheckCircle className='text-2xl text-green-500 mr-4 mt-1' />
              <div>
                <h4 className='text-xl font-semibold mb-2'>Verified Properties</h4>
                <p className='text-gray-600'>
                  All our properties are personally verified for quality and safety
                </p>
              </div>
            </div>
            <div className='flex items-start p-6 bg-white rounded-lg shadow-lg'>
              <FaCheckCircle className='text-2xl text-green-500 mr-4 mt-1' />
              <div>
                <h4 className='text-xl font-semibold mb-2'>Instant Booking</h4>
                <p className='text-gray-600'>
                  Book your stay instantly with our secure payment system
                </p>
              </div>
            </div>
            <div className='flex items-start p-6 bg-white rounded-lg shadow-lg'>
              <FaCheckCircle className='text-2xl text-green-500 mr-4 mt-1' />
              <div>
                <h4 className='text-xl font-semibold mb-2'>Best Price Guarantee</h4>
                <p className='text-gray-600'>
                  We offer competitive prices with no hidden charges
                </p>
              </div>
            </div>
            <div className='flex items-start p-6 bg-white rounded-lg shadow-lg'>
              <FaCheckCircle className='text-2xl text-green-500 mr-4 mt-1' />
              <div>
                <h4 className='text-xl font-semibold mb-2'>24/7 Support</h4>
                <p className='text-gray-600'>
                  Our customer support team is always available to help you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='py-16 bg-blue-600'>
        <div className='container mx-auto px-4 text-center text-white'>
          <h3 className='text-3xl md:text-4xl font-bold mb-6'>
            Ready to Find Your Perfect Stay?
          </h3>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Browse our selection of premium properties and book your dream stay today
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              to='/projects'
              className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors'
            >
              View Properties
            </Link>
            <Link
              to='/contact'
              className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
