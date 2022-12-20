import React from 'react';
import image1 from '../../../Extras/images/christmas-drink-g5cd09c3ca_1920.jpg';


const ProductDetails = () => {
    return (
        <>
            <div className='flex py-10 space-x-8  '>
                <span className=' bg-white'>
                    <img className='w-[26rem] h-96' src={image1} alt=''></img>
                </span>
                <div className='flex flex-col space-y-12'>
                    <div className='flex flex-col space-y-3'>
                        <p className='text-gray-600 font-semibold text-xl'>Kidsme teethers</p>
                        <div className='flex space-x-1'>
                            <p className='text-gray-700 text-base capitalize'>write a review</p>
                            <p>&nbsp;|&nbsp;</p>
                            <span className='flex items-center space-x-2'>
                                <span className='flex space-x-1 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="yellow" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="yellow" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="yellow" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="yellow" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="yellow" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z" /></svg>
                                    <p className='text-gray-700 text-base capitalize'>&nbsp;(5 star review)</p>
                                </span>

                                <p>&nbsp;|&nbsp;</p>

                                <span className='hover:cursor-pointer flex items-center pt-0.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363q.025-.187.075-.337l-7.05-4.1q-.425.375-.95.587Q6.575 15 6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.212q.525.213.95.588l7.05-4.1q-.05-.15-.075-.337Q15 5.175 15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.213q-.525-.212-.95-.587L8.9 11.3q.05.15.075.337Q9 11.825 9 12t-.025.362q-.025.188-.075.338l7.05 4.1q.425-.375.95-.588Q17.425 16 18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22Z" /></svg>
                                </span>

                                <p>&nbsp;|&nbsp;</p>

                                <span className='hover:cursor-pointer flex items-center pt-0.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" /></svg>
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-5'>
                        <div className='flex space-x-4'>
                            <span className='text-gray-800 font-bold capitalize w-28'>Category:</span>
                            <div className='flex flex-col space-y-1'>
                                <p className='capitalize text-gray-600'>Baby and Kids</p>
                                <p className='capitalize text-gray-600'>Kids' Sports, Games & Activities</p>
                                <p className='capitalize text-gray-600'>Kid's Toys & Games</p>
                            </div>
                        </div>

                        <div className='flex space-x-4'>
                            <span className='text-gray-800 font-bold capitalize w-28'>price:</span>
                            <div className='flex flex-col space-y-1'>
                                <p className='capitalize text-gray-600'>Rs.200</p>
                            </div>
                        </div>

                        <div className='flex space-x-4'>
                            <span className='text-gray-800 font-bold capitalize w-28'>quantity</span>
                            <div className='flex'>
                                {/* plus button */}
                                <button className='h-7 w-7 hover:bg-red-600 bg-gray-400 flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" /></svg>
                                </button>

                                {/* quantity counnt */}
                                <span className='h-7 w-10  bg-gray-200 text-gray-700 flex items-center justify-center'>1</span>

                                {/* minus button */}
                                <button className='h-7 w-7 hover:bg-red-600 bg-gray-400 flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M19 12.998H5v-2h14z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex space-x-8'>
                        <button className='bg-green-500 rounded-3xl text-white uppercase flex items-center justify-center hover:bg-green-800 py-3 w-56'>buy now</button>
                        <button className='bg-red-500 rounded-3xl text-white uppercase flex items-center justify-center hover:bg-red-800 py-3 w-56'>add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails