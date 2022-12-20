import React from 'react'
import ProductCardWithDiscount from '../../Utils/Cards/ProductCardWithDiscount'

const ForYouProducts = () => {
    return (
        <div className='bg-white shadow-2xl flex flex-col items-center justify-center py-5 space-y-4 rounded-md'>
            <div className='flex space-x-1 py-1'>
                <ProductCardWithDiscount />
                <ProductCardWithDiscount />
                <ProductCardWithDiscount />
                <ProductCardWithDiscount />
                <ProductCardWithDiscount />
                <ProductCardWithDiscount />
            </div>


            <button className='capitalize flex items-center justify-center px-4 h-10 bg-red-500 text-white'>
                load more
            </button>
        </div>
    )
}

export default ForYouProducts