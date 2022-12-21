import React from 'react'
import Footer from '../../Footer/Footer'
import NavBar from '../../Navbar/NavBar'
import BillingDetails from './BillingDetails'
import OrderSummary from './OrderSummary'
import ShippingDetails from './ShippingDetails'

const OrderCheckOutPage = () => {
    return (
        <>
            <div>
                <NavBar />
            </div>

            <div className='bg-white w-full space-y-16 pb-16'>
                <div className='pt-16'>
                    <div className='flex items-center space-x-4'>
                        <div className='flex items-center -space-x-2'>
                            <span className='w-28 h-1 bg-gray-700'></span>
                            <span className='w-8 h-8 bg-gray-700 rounded-full'></span>
                        </div>
                        <p className='font-bold text-xl pb-1 text-gray-700 capitalize'>Order Checkout</p>
                    </div>
                </div>
                <div className='w-full flex space-x-4  px-36'>
                    <div className='w-[60%] flex flex-col items-center justify-center space-y-10'>
                        <BillingDetails />
                        <ShippingDetails />
                    </div>
                    <div className='flex w-[40%] h-fit'>
                        <OrderSummary />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default OrderCheckOutPage