import React from 'react'
import { assets } from '../assets/assets'
import Navbar from './Navbar'

const About = () => {

  return (
    <>
    <Navbar/>
    <div className='flex flex-col items-center mt-12 justify-center
    container mx-auto p-14 md:px-20 lg:px-32 w-full
    overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span 
      className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About 
        Properties, Deticated to your Vision</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 '>
            <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg hover:scale-110  transition-transform duration-300'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>2</p>
                    <p>Months of Excellence</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>4+</p>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>20+</p>
                    <p>Mn. Sq. Ft. Delivered</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>10+</p>
                    <p>Ongoing Projects</p>
                </div>
                </div>
                <p className='my-10 max-w-lg'>At Property-Rental, we are dedicated to simplifying your property rental experience. 
                  Whether you're looking for a temporary stay or a long-term home, our platform offers a wide range of carefully 
                  curated properties to suit every need and budget. Our mission is to provide students their dream flat near colleges.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
