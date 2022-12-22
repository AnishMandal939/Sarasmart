import React from 'react';
import "./PaymentMethod.css";

const PaymentMethod = () => {
    return (
        <>
            <section id="checkout-page" classNameName="section-pad-bottom">
                <div className="container">
                    <div className="flex space-x-6">
                        <div className=" md:col-span-12 sm:col-span-12">
                            <div className="flex">
                                <div className="md:col-span-12">
                                    <div className="general-wrap" style={{ marginBottom: "30px" }}>
                                        <h6 className="colorGreen">Order Summary</h6>
                                        <div className="flex">
                                            <div className="md:col-span-12">
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
                        <div className="lg:col-span-5 md:col-span-12 sm:col-span-12">
                            <div className="general-wrap">
                                <h6 className="colorGreen">Payment Methods</h6>
                                <div className="flex flex-col flex-wrap">
                                    <div id="payment-method" className='space-y-4'>
                                        <p>Please select the preferred payment method to use on this order.</p>
                                        <table className=''>
                                            <tr style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.07)", }}>
                                                <td>
                                                    <div className='py-2'>
                                                        <label><input className="payment-method" type="radio" name="payment_method" data-name="Cash On Delivery" value="cod" checked="" /> <span className="payment-method-txt">Cash On Delivery</span> </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="https://www.sarasmart.com/frontend/img/payment-method/cashon-delivery.png" />
                                                </td>
                                            </tr>
                                            <tr style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.07)", }}>
                                                <td>
                                                    <div className='py-2'>
                                                        <label><input className="payment-method" type="radio" name="payment_method" data-name="CellPay" value="cellpay" /> <span className="payment-method-txt"> CellPay</span> </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="https://www.sarasmart.com/frontend/img/payment-method/cellpay.png" />
                                                </td>
                                            </tr>

                                            <tr style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.07)", }}>
                                                <td>
                                                    <div className='py-2'>
                                                        <label><input className="payment-method" type="radio" name="payment_method" data-name="Via eSewa" value="esewa" /> <span className="payment-method-txt"> eSewa</span> </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="https://www.sarasmart.com/frontend/img/payment-method/esewa.png" />
                                                </td>
                                            </tr>
                                            <tr style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.07)", }}>
                                                <td>
                                                    <div className='py-2'>
                                                        <label>
                                                            <input className="payment-method" type="radio" name="payment_method" data-name="Fonepay" value="fonepay" />
                                                            <span className="payment-method-txt"> Fonepay</span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="https://www.sarasmart.com/frontend/img/payment-method/fonepay.png" />
                                                </td>
                                            </tr>

                                        </table>
                                    </div>
                                    <div className='w-full' id="checkout-param">
                                        <button className='bg-green-600 w-full rounded-md py-2 hover:bg-green-800 text-white capitalize'>confirm order</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PaymentMethod