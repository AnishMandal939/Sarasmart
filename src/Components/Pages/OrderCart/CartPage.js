import React from 'react'
import NavBar from '../../Navbar/NavBar'
import OrderCart from './OrderCart'

const CartPage = () => {
    return (
        <>
            <div>
                <NavBar />
            </div>

            <div className='bg-white w-full space-y-16'>
                <div className='pt-16'>
                    <div className='flex items-center space-x-4'>
                        <div className='flex items-center -space-x-2'>
                            <span className='w-28 h-1 bg-gray-700'></span>
                            <span className='w-8 h-8 bg-gray-700 rounded-full'></span>
                        </div>
                        <p className='font-bold text-xl pb-1 text-gray-700 capitalize'>Order Cart</p>
                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <OrderCart />
                </div>
            </div>

        </>
    )
}

export default CartPage