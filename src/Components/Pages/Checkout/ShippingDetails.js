import React from 'react'

const ShippingDetails = () => {
    return (
        <div className='w-full bg-white pt-5 px-10 shadow-xl border-[1px] space-y-3 pb-10 rounded-md'>
            <h1 className='text-gray-700 text-xl capitalize pb-5' >Billing details</h1>

            <div className='grid grid-cols-2 gap-x-2 gap-y-3'>
                {/* first name */}
                <div className='flex w-full border-[1px]  rounded-md border-black'>
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

                {/* phone */}
                <div className='flex w-full border-[1px]  rounded-md border-black'>
                    <span className='py-2 px-5 w-[100%] flex items-center'>
                        <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='Mobile'></input>
                    </span>
                </div>

                {/* login email */}
                <div className='flex w-full border-[1px]  rounded-md border-black'>
                    <span className='py-2 px-5 w-[100%] flex items-center'>
                        <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='E-Mail'></input>
                    </span>
                </div>

                {/* select location  */}
                <div className='flex w-full border-[1px]  rounded-md border-black'>
                    <span className='py-2 px-5 w-[100%] flex items-center'>
                        <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='E-Mail'></input>
                    </span>
                </div>

                {/* address  */}
                <div className='flex w-full border-[1px]  rounded-md border-black'>
                    <span className='py-2 px-5 w-[100%] flex items-center'>
                        <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='E-Mail'></input>
                    </span>
                </div>

                {/* town/state */}
                <div className='flex w-full border-[1px]  rounded-md border-black'>
                    <span className='py-2 px-5 w-[100%] flex items-center'>
                        <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='Town/State'></input>
                    </span>
                </div>

                {/* State/Zone  */}
                <div className='flex w-full border-[1px]  rounded-md border-black'>
                    <span className='py-2 px-5 w-[100%] flex items-center'>
                        <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='State/Zone'></input>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ShippingDetails