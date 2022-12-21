import React from 'react'

const RegisterCard = () => {
    return (
        <div className=' px-8 py-6 bg-white shadow-xl border-[1px] w-[60%] space-y-6 rounded-md pb-12'>
            <h1 className='text-red-600 text-xl capitalize' >create your account</h1>
            <div className='grid grid-cols-2 gap-x-2 gap-y-3'>
                {/* first name */}
                <div className='flex w-full border-[1px]  rounded-md border-black'>
                    <span className='flex  items-center pl-2 pt-0.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" /></svg>
                    </span>
                    <span className='py-2 px-5 w-[100%] flex items-center'>
                        <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='First Name'></input>
                    </span>
                </div>

                {/* last name */}
                <div className='flex w-full border-[1px]  rounded-md border-black'>
                    <span className='py-2 px-5 w-[100%] flex items-center'>
                        <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='Last Name'></input>
                    </span>
                </div>

                {/* login email */}
                <div className='flex w-full border-[1px]  rounded-md border-black'>
                    <span className='flex  items-center pl-2 pt-0.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z" /></svg>
                    </span>
                    <span className='py-2 px-5 w-[100%] flex items-center'>
                        <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='E-Mail'></input>
                    </span>
                </div>

                {/* phone */}
                <div className='flex w-full border-[1px]  rounded-md border-black'>
                    <span className='flex  items-center pl-2 pt-0.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                    </span>
                    <span className='py-2 px-5 w-[100%] flex items-center'>
                        <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='Mobile'></input>
                    </span>
                </div>

                {/* password */}
                <div className='flex w-full border-[1px]  rounded-md border-black'>
                    <span className='flex  items-center pl-2 pt-0.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="black" d="M224 96v112a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h36V52a44 44 0 0 1 88 0a8 8 0 0 1-16 0a28 28 0 0 0-56 0v28h108a16 16 0 0 1 16 16Z" /></svg>
                    </span>
                    <span className='py-2 px-5 w-[100%] flex items-center'>
                        <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='Password'></input>
                    </span>
                </div>

                {/* confirm password */}
                <div className='flex w-full border-[1px]  rounded-md border-black'>
                    <span className='py-2 px-5 w-[100%] flex items-center'>
                        <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='Confirm Password'></input>
                    </span>
                </div>
            </div>

            <div className='flex w-full flex-col items-center justify-center space-y-4'>
                <div className='flex w-full space-x-2 items-center justify-center'>
                    <input className='w-4 h-4' type="checkbox" id="Promotion" name="Promotion" value="Promotion" />
                    <label for="Promotion"> I want to receive exclusive offers and promotions from this site</label>
                </div>

                <div className='flex flex-col items-center justify-center w-[40%] space-y-2'>
                    <button className='bg-green-600 hover:bg-green-800 text-white w-full py-1 uppercase rounded-md'>sign up</button>
                    <span className='flex w-full'>By clicking "SIGN UP" I agree to &nbsp;<span className='text-red-600 underline underline-offset-1'>Privacy Policy</span></span>
                </div>
            </div>
        </div>
    )
}

export default RegisterCard