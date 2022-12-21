import React from 'react'
import Footer from '../../Footer/Footer'
import NavBar from '../../Navbar/NavBar'
import SearchCard from './SearchCard'

const SearchPage = () => {
    return (
        <>
            <div>
                <NavBar />
            </div>

            <div className='bg-[#f0ffff] w-full space-y-16'>
                <div className='pt-16'>
                    <div className='flex items-center space-x-4'>
                        <div className='flex items-center -space-x-2'>
                            <span className='w-28 h-1 bg-gray-700'></span>
                            <span className='w-8 h-8 bg-gray-700 rounded-full'></span>
                        </div>
                        <p className='font-bold text-xl pb-1 text-gray-700 capitalize'>Searched Results</p>
                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <SearchCard />
                </div>
            </div>

            <div className='pt-16'>
                <Footer />
            </div>
        </>
    )
}

export default SearchPage