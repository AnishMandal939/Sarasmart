import React from 'react'
import ImageSlider from '../../Banner/ImageSlider'
import Footer from '../../Footer/Footer'
import NavBar from '../../Navbar/NavBar'
import ExclusiveProducts from './ExclusiveProducts'
import ForYouProducts from './ForYouProducts'

const HomePage = () => {
    return (
        <div className='space-y-10'>
            <div>
                <NavBar />
                <ImageSlider />
            </div>

            {/* Exclusive Product */}
            <div className='w-full pt-2'>
                <div className='flex items-center space-x-4'>
                    <div className='flex items-center -space-x-2'>
                        <span className='w-28 h-1 bg-gray-700'></span>
                        <span className='w-8 h-8 bg-gray-700 rounded-full'></span>
                    </div>
                    <p className='font-bold text-2xl pb-1 text-gray-700 capitalize'>exclusive products</p>
                </div>

                <div className='container px-[4.5rem] py-2'>
                    <ExclusiveProducts />
                </div>
            </div>

            {/* for you products categories */}
            <div className='w-full pt-2'>
                <div className='flex items-center space-x-4'>
                    <div className='flex items-center -space-x-2'>
                        <span className='w-28 h-1 bg-gray-700'></span>
                        <span className='w-8 h-8 bg-gray-700 rounded-full'></span>
                    </div>
                    <p className='font-bold text-2xl pb-1 text-gray-700 capitalize'>exclusive products</p>
                </div>

                <div className='container px-[4.5rem] py-2'>
                    <ForYouProducts />
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default HomePage