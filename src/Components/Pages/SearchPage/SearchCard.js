import React from 'react';
import ProductCardWithDiscount from '../../Utils/Cards/ProductCardWithDiscount';

const SearchCard = () => {
    return (
        <div className='bg-white rounded-md w-[90%]  shadow-xl px-4 py-8'>
            <div className='flex items-center justify-between'>
                <p className='text-gray-600 font-semibold text-xl'>17 items found</p>
                <button className='capitalize border-gray-600 border-[1px] rounded-md w-36 px-4 py-2 flex justify-start'>sort by</button>
            </div>

            <div className=' grid grid-cols-6 gap-y-6 py-8 items-center'>
                <ProductCardWithDiscount />
                <ProductCardWithDiscount />
                <ProductCardWithDiscount />
                <ProductCardWithDiscount />
                <ProductCardWithDiscount />
                <ProductCardWithDiscount />
                <ProductCardWithDiscount />
                <ProductCardWithDiscount />
                <ProductCardWithDiscount />
                <ProductCardWithDiscount />


            </div>
        </div>
    )
}

export default SearchCard;