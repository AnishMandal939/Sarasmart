import React from 'react'
import LoginCard from './Auth/LoginCard'
import RegisterCard from './Auth/RegisterCard'
import BillingDetails from './Pages/Checkout/BillingDetails'
import OrderCheckOutPage from './Pages/Checkout/OrderCheckOutPage'
import OrderSummary from './Pages/Checkout/OrderSummary'
import ShippingDetails from './Pages/Checkout/ShippingDetails'
import LoginPage from './Pages/Login&RegisterPage/LoginPage'
import RegisterPage from './Pages/Login&RegisterPage/RegisterPage'
import CartPage from './Pages/OrderCart/CartPage'
import OrderCart from './Pages/OrderCart/OrderCart'
import ProductDetailsPage from './Pages/ProductDetails/ProductDetailsPage'
import SearchCard from './Pages/SearchPage/SearchCard'
import SearchPage from './Pages/SearchPage/SearchPage'
import ProductCardWithDiscount from './Utils/Cards/ProductCardWithDiscount'

const Test = () => {
    return (
        <>
            {/* <ProductCardWithDiscount /> */}
            {/* <ProductDetailsPage /> */}
            {/* <SearchPage /> */}
            {/* <CartPage /> */}
            {/* <LoginCard /> */}
            {/* <LoginPage /> */}
            {/* <RegisterCard /> */}
            {/* <RegisterPage /> */}
            {/* <BillingDetails /> */}
            {/* <ShippingDetails /> */}
            {/* <OrderSummary /> */}
            <OrderCheckOutPage />

        </>
    )
}

export default Test