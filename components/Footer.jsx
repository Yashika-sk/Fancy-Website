import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            SR Shine Fancy is a vibrant fancy store located in Urvastore, known for its wide range of fashionable and trendy accessories. We cater to customers seeking stylish products for everyday use, special occasions, or gifting purposes.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
            <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About us</li></Link>
                <li>Delivery</li>
                <Link to='/return-policy'><li> Return Policy</li></Link>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>9449770099</li>
                <li>srshine@gmail.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ SR_Shine.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
