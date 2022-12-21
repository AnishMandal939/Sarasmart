import React from 'react'

const LoginCard = () => {
    return (
        <div className='flex px-8 py-6 bg-white shadow-xl border-[1px] w-[60%] space-x-8 rounded-md pb-12'>
            <div className='flex flex-col w-[40%] space-y-5'>
                <h1 className='text-red-600 text-xl capitalize' >login</h1>

                {/* login email */}
                <div className='flex w-full border-[1px]  rounded-md border-black'>
                    <span className='flex  items-center pl-2 pt-0.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z" /></svg>
                    </span>
                    <span className='py-2 px-5 w-[100%] flex items-center'>
                        <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='E-Mail'></input>
                    </span>
                </div>

                {/* login password */}
                <div className='flex w-full border-[1px]  rounded-md border-black'>
                    <span className='flex  items-center pl-2 pt-0.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="black" d="M224 96v112a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h36V52a44 44 0 0 1 88 0a8 8 0 0 1-16 0a28 28 0 0 0-56 0v28h108a16 16 0 0 1 16 16Z" /></svg>
                    </span>
                    <span className='py-2 px-5 w-[100%] flex items-center'>
                        <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='Password'></input>
                    </span>
                </div>

                <div className='flex w-full space-x-2 items-center'>
                    <input className='w-4 h-4' type="checkbox" id="Remember_me" name="Remember_me" value="Remember_me" />
                    <label for="Remember_me"> Remember Me</label>
                </div>

                <div className='flex items-center'>
                    <button className='bg-green-600 hover:bg-green-800 text-white w-full py-2 uppercase rounded-md'>Login</button>
                </div>

                <div className='flex flex-col space-y-1.5'>
                    <span className='flex items-center'>
                        <p className='capitalize'>forgot your password? &nbsp;</p>
                        <p className='capitalize text-red-600 hover:underline hover:underline-offset-2 hover:cursor-pointer'>click here</p>
                    </span>

                    <span className='flex items-center'>
                        <p className='capitalize'>didn't get a verification code? &nbsp;</p>
                        <p className='capitalize text-red-600 hover:underline hover:underline-offset-2 hover:cursor-pointer'>click here</p>
                    </span>
                </div>
            </div>

            <div className='h-80 w-[2px] bg-gray-200 rounded-md'></div>

            <div className='flex flex-col w-[50%] space-y-5'>
                <div className='flex flex-col space-y-2'>
                    <h1 className='text-red-600 text-xl capitalize' >create an account</h1>
                    <p className='capitalize text-gray-600'>don't have an account? create one now!</p>
                </div>

                <div className='flex w-full items-center space-x-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 11.9l-.7 1.3l-5.3-2.9V7h1.5v4.4l4.5 2.5Z" /></svg>
                    <span className='flex w-full '>
                        <p className='font-bold capitalize '>faster checkout &nbsp;</p>
                        <p className=''>and easy access to order history</p>
                    </span>
                </div>
                <div className='flex w-full items-center space-x-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" /></svg>
                    <span className='flex w-full '>
                        <p className='font-bold capitalize '>personalize &nbsp;</p>
                        <p className=''>your shopping</p>
                    </span>
                </div>

                <div className='flex items-center'>
                    <button className='bg-green-600 hover:bg-green-800 text-white w-full py-2 uppercase rounded-md'>create an account</button>
                </div>
            </div>
        </div>
    )
}

export default LoginCard