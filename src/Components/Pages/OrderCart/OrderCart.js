import React from 'react'

const OrderCart = () => {
    return (
        <div className='flex flex-row space-x-4  w-[90%]'>

            {/* items details */}
            <div className=' bg-white w-[60%] overflow-hidden shadow-xl border-[1px] rounded-md px-16 pt-8 pb-10'>
                <div className='flex items-center w-full space-x-5'>
                    {/* product name */}
                    <div className='w-[40%] px-10 flex flex-col flex-wrap space-y-2'>
                        <span className='text-gray-600 font-semibold'>Ahuja Aud 1000Xlr Wired Microphone</span>
                        <span className='text-gray-600'>7654</span>
                    </div>

                    {/* price */}
                    <div className='w-[20%]'>
                        <span className=''>Rs.711</span>
                    </div>

                    {/* add and delete buttons */}
                    <div className='flex space-x-3 w-[20%]'>
                        <div className='flex'>
                            {/* minus button */}
                            <button className='h-7 w-7 hover:bg-red-600 bg-gray-400 flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M19 12.998H5v-2h14z" /></svg>
                            </button>

                            {/* quantity counnt */}
                            <span className='h-7 w-10  bg-gray-200 text-gray-700 flex items-center justify-center'>1</span>


                            {/* plus button */}
                            <button className='h-7 w-7 hover:bg-red-600 bg-gray-400 flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" /></svg>
                            </button>
                        </div>
                        <div className='flex items-center justify-center bg-red-600 w-7 h-7 shadow-xl rounded-md hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="white" d="M2 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5H2zm3 9H4V7h1v7zm2 0H6V7h1v7zm2 0H8V7h1v7zm2 0h-1V7h1v7zm2.25-12H10V.75A.753.753 0 0 0 9.25 0h-3.5A.753.753 0 0 0 5 .75V2H1.75a.752.752 0 0 0-.75.75V4h13V2.75a.752.752 0 0 0-.75-.75zM9 2H6v-.987h3V2z" /></svg>
                        </div>
                    </div>
                </div>
            </div>


            {/*order summary */}
            <div className=' block px-6 pb-8 pt-5 w-[30%] bg-white shadow-xl border-[1px] rounded-md space-y-5'>
                <div className='flex sticky flex-col space-y-2'>
                    <h1 className='capitalize text-lg text-gray-600'>your order</h1>
                    <div className='flex items-center'>
                        <p className='capitalize font-bold '>sub total:</p>
                        <p className='capitalize'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; rs. 14,200</p>
                    </div>
                </div>

                <div className='flex flex-col space-y-2'>
                    <h1 className='text-red-500 capitalize'>have a code?</h1>
                    <div className='flex  border-[1px]  rounded-md border-black'>
                        <span className='py-2 px-5 w-[100%]'>
                            <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='Discount  or Promo Code'></input>
                        </span>
                    </div>
                    <div className='flex w-full  items-center justify-end'>
                        <button className='bg-red-500 w-28 text-white py-2 capitalize rounded-md hover:bg-red-700'>apply</button>
                    </div>
                </div>



                <div className='flex w-full flex-col  space-y-2'>
                    <div className='flex items-center'>
                        <p className='text-gray-600 font-semibold  capitalize'>total amount:</p>
                        <p className='text-green-500 font-semibold  capitalize'>&nbsp; rs.1,20,000</p>
                    </div>

                    <button className='w-full py-2 uppercase bg-green-600 text-white rounded-md'>
                        proceed to checkout
                    </button>
                </div>

            </div>

        </div>
    )
}

export default OrderCart