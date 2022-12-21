import React from 'react'
import LoginCard from '../../Auth/LoginCard'
import NavBar from '../../Navbar/NavBar'

const LoginPage = () => {
    return (
        <>
            <NavBar />
            <div className='flex items-center justify-center pt-20'>
                <LoginCard />
            </div>
        </>
    )
}

export default LoginPage