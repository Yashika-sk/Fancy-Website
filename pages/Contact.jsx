import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className="bg-gray-50 py-12">

      {/* Title Section */}
      <div className='text-center text-3xl font-bold pt-10 pb-6 border-t-4 border-indigo-600'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Information Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-12 items-center'>
        <div className='w-full md:max-w-lg'>
          <img className='w-full rounded-lg shadow-lg hover:scale-105 transition-all duration-300' src={assets.contact_img} alt="SR Shine Fancy Store" />
        </div>
        <div className='flex flex-col justify-center items-start gap-6'>
          {/* Store Details */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:bg-indigo-50 transition-all duration-300">
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>
              SR Shine Fancy <br />
              Urvastore, Mangalore, Karnataka, India
            </p>
            <p className='text-gray-500'>
              Tel: +9449770099 <br /> 
              Email: <a href="mailto:srshine@gmail.com" className="text-indigo-600 hover:underline">srshine@gmail.com</a>
            </p>
          </div>
          {/* Careers Section */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:bg-indigo-50 transition-all duration-300">
            <p className='font-semibold text-xl text-gray-600'>Join Our Team</p>
            <p className='text-gray-500'>
              Be part of SR Shine Fancy and grow with us!
            </p>
            <button 
              className='mt-4 border border-indigo-600 px-8 py-3 text-sm font-medium text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300' 
              onClick={() => alert('No jobs available at the moment.')}
            >
              Explore Careers
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription Box */}
      <NewsletterBox />
    </div>
  )
}

export default Contact
