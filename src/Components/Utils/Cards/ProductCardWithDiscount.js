import React from 'react';
import image1 from "../../../Extras/images/christmas-drink-g5cd09c3ca_1920.jpg"

const ProductCardWithDiscount = () => {
    return (
        <div className='h-[19rem] w-56 bg-white rounded-md border-x-[1px] border-b-[1px] hover:cursor-pointer hover:shadow-xl'>
            {/* product image */}
            <div className='relative overflow-hidden'>
                <span>
                    <img className='w-full h-48' src={image1} alt=""></img>
                </span>

                <span className='absolute -top-8 -left-10 -rotate-45 flex items-center px-4 h-6 w-full overflow-hidden bg-red-600'>
                    <p className='text-white text-sm font-bold uppercase'>63% off</p>
                </span>

            </div>

            {/* product details */}
            <div className='flex flex-col items-center justify-center pt-4 space-y-2'>
                <p className='font-normal text-gray-700 text-lg'>Apple Beer</p>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-normal text-red-500 text-sm line-through'>Rs 1300</p>
                    <p className='font-medium text-green-500 text-base'>Rs 1200+</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCardWithDiscount