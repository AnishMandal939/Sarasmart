import React from 'react';
import "../Pages/PaymentMethod/PaymentMethod.css"

const OrderConfirmInvoice = () => {
    return (
        <>
            <div className='py-16 flex flex-col w-[60%] space-y-4 bg-white px-20 rounded-md shadow-xl'>
                <div className='flex flex-col space-y-10 items-center justify-center'>
                    <div className='flex flex-col items-center justify-center' >
                        <h2 className='text-[#0f5b5b] font-bold text-2xl capitalize'>thankyou for your order with Saramart</h2>
                        <p>A confirmation email was sent, Please check your email</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <h2 className='text-gray-700 text-xl font-semibold uppercase'>order information</h2>
                    </div>
                </div>


                <div className='flex flex-col space-y-2 items-start justify-start'>
                    <div className='flex items-center'>
                        <span className='flex w-32 capitalize'>order ID:</span>
                        <span className=''>&nbsp;#1230</span>
                    </div>
                    <div className='flex items-center'>
                        <span className='flex w-32 capitalize'>name:</span>
                        <span className='capitalize'>&nbsp;hashsah</span>
                    </div>
                    <div className='flex items-center'>
                        <span className='flex w-32 capitalize'>contact:</span>
                        <span className=''>&nbsp;9846656565</span>
                    </div>
                    <div className='flex items-center'>
                        <span className='flex w-32 capitalize'>order created:</span>
                        <span className='capitalize'>&nbsp;october 17,2022</span>
                    </div>
                    <div className='flex items-center'>
                        <span className='flex w-32 capitalize'>order status:</span>
                        <span className='capitalize'>&nbsp;pending</span>
                    </div>
                    <div className='flex items-center'>
                        <span className='flex w-32 capitalize'>payment status:</span>
                        <span className='capitalize'>&nbsp;pending ( cash on delivery )</span>
                    </div>
                </div>

                <div className='flex flex-col space-y-2 items-center justify-center pt-6'>
                    <h1 className='text-xl font-semibold uppercase'>products</h1>
                    <div className="flex w-full">
                        <div className="w-full">
                            <div id="user-order-invoice">
                                <table className="table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "265px" }}>Name</th>
                                            <th>Quantity</th>
                                            <th style={{ width: "130px" }}>Price</th>
                                            <th style={{ width: "115px" }}>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Silicone Spatula Heat Resistant with Stainless Steel Core</td>
                                            <td>1</td>
                                            <td>Rs.250</td>
                                            <td>Rs.250</td>
                                        </tr>
                                        <tr>
                                            <td>Huesland 144 TC Comfort Cotton Single Bedsheet with 1 Pillow Cover - Pink, Yellow and Green</td>
                                            <td>1</td>
                                            <td>Rs.1,775</td>
                                            <td>Rs.1,775</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" className="custom-empty-colspan"></td>
                                            <td><strong>Sub Total:</strong> </td>
                                            <td>Rs.2,025</td>
                                        </tr>
                                        {/* <tr>
                                                <td colspan="1" className="custom-empty-colspan"></td>
                                                <td><strong>Tax:</strong> </td>
                                                <td>0%</td>
                                                </tr>  */}
                                        <tr>
                                            <td colspan="2" className="custom-empty-colspan"></td>
                                            <td><strong>Grand Total:</strong></td>
                                            <td> Rs.2,025</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='flex flex-col space-x-4 w-full space-y-2 pt-6'>
                                    <div className='w-full flex items-center justify-center'>
                                        <h1 className='text-xl font-semibold uppercase'>billing and shipping address</h1>
                                    </div>
                                    <div className='flex space-x-4 w-full'>
                                        <table className="table table-hover table-bordered">
                                            <thead>
                                                <tr>
                                                    <th colspan="2">
                                                        <strong>Billing address</strong>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: "100px" }}>Full name</td>
                                                    <td>F Y</td>
                                                </tr>
                                                <tr>
                                                    <td>Address</td>
                                                    <td>brt, brt</td>
                                                </tr>
                                                <tr>
                                                    <td>Phone</td>
                                                    <td>9862004936</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table className="table table-hover table-bordered">
                                            <thead>
                                                <tr>
                                                    <th colspan="2">
                                                        <strong>Shipping address</strong>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: "100px" }}>Full name</td>
                                                    <td>F Y</td>
                                                </tr>
                                                <tr>
                                                    <td>Address</td>
                                                    <td>g, gasd</td>
                                                </tr>
                                                <tr>
                                                    <td>Phone</td>
                                                    <td>9862004936</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default OrderConfirmInvoice