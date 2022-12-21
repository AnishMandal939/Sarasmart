import React from 'react'

const OrderSummary = () => {
    return (
        <div className=' block px-6 pb-8 h-fit pt-5 w-full bg-white shadow-xl border-[1px] rounded-md space-y-8'>
            <div className='flex'>
                <h1 className='capitalize text-lg text-gray-600'>your order</h1>
            </div>

            <div className='flex w-full flex-col space-y-4 pl-14 pr-4'>
                <div className='flex w-full space-x-2'>
                    <div className='flex flex-col space-y-1'>
                        <span className='w-[70%] flex flex-wrap text-gray-600'>Silicone Spatula Heat Resistant with Stainless Steel Core</span>
                        <span className='text-gray-500'>eg</span>
                    </div>
                    <span className='w-[30%] flex justify-end text-gray-600'>Rs.25000</span>
                </div>
                <div className='flex w-full space-x-2'>
                    <div className='flex flex-col space-y-1'>
                        <span className='w-[70%] flex flex-wrap text-gray-600'>Huesland 133 TC Comfort Cotton Single Bedsheet with 1  Pillow Cover - Pink, Yellow and Green</span>
                        <span className='text-gray-500'>44241</span>
                    </div>
                    <span className='w-[30%] flex text-gray-600 justify-end'>Rs.25000</span>
                </div>
            </div>

            <div className='flex flex-col space-y-2'>
                <span className='flex justify-between'>
                    <p className='capitalize text-gray-600'>sub total</p>
                    <p className='capitalize text-gray-600'>rs. 2025.00</p>
                </span>
                <span className='flex justify-between'>
                    <p className='capitalize text-gray-600'>total amount</p>
                    <p className='capitalize text-gray-600'>rs. 2025.00</p>
                </span>
                <button className='bg-green-600 text-white uppercase w-full py-1.5 rounded-md hover:bg-green-800 hover:cursor-pointer'>continue</button>
            </div>

        </div>
    )
}

export default OrderSummary