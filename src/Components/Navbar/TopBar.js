import React from 'react';

const TopBar = () => {
    return (
        <div className='flex w-full flex-wrap h-10'>
            <div className='flex bg-[#e73f39] w-[50%] items-center justify-start px-16 '>
                <p className='text-white text-sm'>xxxxxxxx  |  xxxxxxxxxx (NCELL) Contact Information</p>
            </div>
            <div className='flex bg-[#169149] w-[50%] items-center justify-end space-x-6 px-10'>
                <button className='text-white text-xs uppercase hover:text-black'>Track my order</button>
                <button className='text-white text-xs uppercase hover:text-black'>customer care</button>
            </div>
        </div>
    )
}

export default TopBar