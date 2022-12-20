import React, { useRef } from 'react';
import ProductCardWithDiscount from '../../Utils/Cards/ProductCardWithDiscount';
import Carousel from 'react-elastic-carousel';

const RelatedProducts = () => {
    const carousel = useRef(null);

    return (
        <div className='bg-white shadow-xl rounded-md w-[92%] pt-8 pb-16'>
            <div className='w-full px-8 pb-8 flex flex-col space-y-4'>
                <h1 className='text-2xl font-bold text-gray-700'>Related products</h1>
                <div className='w-full h-[1px] bg-gray-700'></div>
            </div>
            <Carousel
                enableAutoPlay
                autoPlaySpeed={3000}
                ref={carousel}
                showArrows={false}
                pagination={false}
                itemPadding={[0, 0]}
            >
                <div className='flex space-x-1 py-1'>
                    <ProductCardWithDiscount />
                    <ProductCardWithDiscount />
                    <ProductCardWithDiscount />
                    <ProductCardWithDiscount />
                    <ProductCardWithDiscount />
                </div>
                <div className='flex space-x-1 py-1'>
                    <ProductCardWithDiscount />
                    <ProductCardWithDiscount />
                    <ProductCardWithDiscount />
                    <ProductCardWithDiscount />
                    <ProductCardWithDiscount />
                </div>
                <div className='flex space-x-1 py-1'>
                    <ProductCardWithDiscount />
                    <ProductCardWithDiscount />
                    <ProductCardWithDiscount />
                    <ProductCardWithDiscount />
                    <ProductCardWithDiscount />
                </div>
            </Carousel>
        </div>
    )
}

export default RelatedProducts