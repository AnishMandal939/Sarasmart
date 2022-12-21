import React from 'react'
import RegisterCard from '../../Auth/RegisterCard'
import NavBar from '../../Navbar/NavBar'

const RegisterPage = () => {
    return (
        <>
            <NavBar />
            <div className='flex items-center justify-center pt-20'>
                <RegisterCard />
            </div>
        </>
    )
}

export default RegisterPage