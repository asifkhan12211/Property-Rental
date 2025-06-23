import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { propertyData } from '../data/propertyData';
import Navbar from './Navbar';

const Projects = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToshow] = useState(1);
  const [selectedType, setSelectedType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToshow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToshow(2);
      } else {
        setCardsToshow(1);
      }
    };
    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(filteredProjects.length / cardsToShow));
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? Math.ceil(filteredProjects.length / cardsToShow) - 1 
        : prevIndex - 1
    );
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setCurrentIndex(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    setCurrentIndex(0);
  };

  // Filter projects based on selected type, price range, and search query
  const filteredProjects = propertyData.filter((project) => {
    const matchesType = selectedType ? project.type.toLowerCase() === selectedType.toLowerCase() : true;
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery) ||
      project.location.toLowerCase().includes(searchQuery);
    const matchesPrice = project.price >= minPrice && project.price <= maxPrice;

    return matchesType && matchesSearch && matchesPrice;
  });

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
          Available <span className='text-blue-600'>Properties</span>
        </h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
          Find Your Perfect Space - Explore Our Collection
        </p>

        {/* Search and Filters */}
        <div className='grid md:grid-cols-3 gap-6 mb-8'>
          <div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by name or location"
              className='w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div>
            <select
              value={selectedType}
              onChange={handleTypeChange}
              className='w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            >
              <option value="">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="house">House</option>
              <option value="cottage">Cottage</option>
              <option value="penthouse">Penthouse</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <select
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className='flex-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            >
              <option value={0}>₹0</option>
              <option value={5000}>₹5,000</option>
              <option value={10000}>₹10,000</option>
              <option value={20000}>₹20,000</option>
              <option value={30000}>₹30,000</option>
            </select>
            <span>to</span>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className='flex-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            >
              <option value={10000}>₹10,000</option>
              <option value={20000}>₹20,000</option>
              <option value={30000}>₹30,000</option>
              <option value={40000}>₹40,000</option>
              <option value={50000}>₹50,000</option>
            </select>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className='flex justify-end items-center mb-8 space-x-4'>
          <button 
            onClick={prevProject} 
            className='p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors'
            disabled={filteredProjects.length <= cardsToShow}
          >
            <img src={assets.left_arrow} alt="Previous" className="w-6 h-6" />
          </button>
          <button 
            onClick={nextProject} 
            className='p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors'
            disabled={filteredProjects.length <= cardsToShow}
          >
            <img src={assets.right_arrow} alt="Next" className="w-6 h-6" />
          </button>
        </div>

        {/* Property Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.length > 0 ? (
            filteredProjects
              .slice(
                currentIndex * cardsToShow,
                Math.min((currentIndex + 1) * cardsToShow, filteredProjects.length)
              )
              .map((property) => (
                <div
                  key={property.id}
                  className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
                >
                  <div className='relative aspect-w-16 aspect-h-9'>
                    <img
                      src={property.images[0]}
                      alt={property.name}
                      className='w-full h-64 object-cover'
                    />
                    <div className='absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm'>
                      {property.type}
                    </div>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>{property.name}</h3>
                    <p className='text-gray-500 mb-4'>{property.location}</p>
                    <div className='flex justify-between items-center mb-4'>
                      <div className='text-gray-900 font-medium'>₹{property.price}/night</div>
                      <div className='text-gray-600 text-sm'>
                        {property.bedrooms} beds • {property.bathrooms} baths
                      </div>
                    </div>
                    <button
                      onClick={() => navigate(`/property/${property.id}`)}
                      className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors'
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))
          ) : (
            <div className='col-span-full text-center py-12 text-gray-500'>
              No properties match your search criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
