import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className='bg-gray-100 py-10 px-5'>
      <div className='text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 items-center'>
          <img className='w-full md:max-w-[450px] rounded-lg shadow-lg' src={assets.about_img} alt='About Us' />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700 bg-white p-6 rounded-lg shadow-md'>
              <p className='text-lg font-medium'>SR Shine Fancy is your one-stop destination for trendy and elegant accessories. We bring style and sophistication to your everyday life through our carefully curated collections.</p>
              <p className='text-md'>From chic hair accessories and stunning jewelry to unique gift items and fashion essentials, we offer a diverse range of high-quality products. Every item in our store is thoughtfully selected to cater to different styles and tastes.</p>
              <b className='text-gray-900 text-lg'>Our Mission</b>
              <p className='text-md'>At SR Shine Fancy, we aim to enhance your style with affordable, high-quality products while ensuring a seamless and delightful shopping experience. We are committed to being your favorite fashion and accessories store.</p>
          </div>
      </div>

      <div className='text-xl py-4 text-center'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-6 justify-center'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white rounded-lg shadow-lg text-center'>
            <b className='text-gray-900 text-lg'>Quality Assurance</b>
            <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white rounded-lg shadow-lg text-center'>
            <b className='text-gray-900 text-lg'>Convenience</b>
            <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white rounded-lg shadow-lg text-center'>
            <b className='text-gray-900 text-lg'>Exceptional Customer Service</b>
            <p className='text-gray-600'>Our dedicated professionals ensure your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
    </div>
  );
}

export default About;
