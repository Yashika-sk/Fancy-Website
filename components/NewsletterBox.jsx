import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const NewsletterBox = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (email) {
            setSubscribed(true);
            alert('Thank you for subscribing! Stay tuned for exciting offers.');
        }
    };

    return (
        <div className='text-center p-6 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg shadow-lg'>
            {!subscribed ? (
                <>
                    <motion.p 
                        className='text-2xl font-semibold text-white' 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Subscribe & Get <span className='text-yellow-300'>20% Off</span> Your First Purchase!
                    </motion.p>
                    <p className='text-white mt-2 text-sm'>
                        Join our exclusive list to access the latest collections, special discounts, and trendy updates.
                    </p>
                    <form 
                        onSubmit={onSubmitHandler} 
                        className='w-full sm:w-2/3 lg:w-1/2 mx-auto mt-5 flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-md'>
                        <FaEnvelope className='text-gray-500' />
                        <input 
                            className='w-full outline-none p-2 text-gray-700 rounded-full' 
                            type='email' 
                            placeholder='Enter your email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                        <motion.button 
                            type='submit' 
                            className='bg-black text-white px-6 py-3 rounded-full text-xs font-bold tracking-wider hover:bg-gray-800 transition-all duration-300'
                            whileHover={{ scale: 1.05 }}
                        >
                            SUBSCRIBE
                        </motion.button>
                    </form>
                </>
            ) : (
                <motion.p 
                    className='text-white text-lg font-semibold' 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5 }}
                >
                    🎉 You're subscribed! Get ready for amazing updates & discounts.
                </motion.p>
            )}
        </div>
    );
};

export default NewsletterBox;
