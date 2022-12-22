import React from 'react'
import Footer from '../Footer/Footer'
import OrderConfirmInvoice from '../Invoice/OrderConfirmInvoice'
import NavBar from '../Navbar/NavBar'

const OrderConfirmPage = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>

            <div className='bg-[#f0ffff] w-full py-10'>
                <div className='flex items-center space-x-4'>
                    <div className='flex items-center -space-x-2'>
                        <span className='w-28 h-1 bg-gray-700'></span>
                        <span className='w-8 h-8 bg-gray-700 rounded-full'></span>
                    </div>
                    <p className='font-bold text-xl pb-1 text-gray-700 capitalize'>thankyou!</p>
                </div>

                <div className='flex items-center justify-center pt-10'>
                    <OrderConfirmInvoice />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OrderConfirmPage