import React from 'react'

const SearchBar = () => {
    return (
        <div className='bg-white shadow-md sticky z-50 w-full h-16 flex items-center justify-between px-10'>

            {/* logo */}
            <div className='logo'>
                <h1 className='text-black font-bold text-2xl'>SaraSmart</h1>
            </div>

            {/*search input field */}
            <div className='flex w-[45%] border-y-[1px] border-l-[1px] rounded-md border-black'>
                <span className='py-2 px-5 w-[100%]'>
                    <input className='border-none outline-none bg-transparent w-full' type="text" placeholder='Find your products in Sarasmart'></input>
                </span>

                <button className='w-12 bg-green-600 rounded-r-md flex items-center justify-center' type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" /></svg>
                </button>
            </div>

            {/* login and cart buttons */}
            <div className='flex space-x-4'>
                <button className='flex items-center justify-center space-x-2 px-2 h-10 rounded-md shadow-md border-[1px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z" /></svg>
                    <span>0</span>
                </button>
                <button className='flex items-center justify-center space-x-2 px-2 h-10 rounded-md shadow-md border-[1px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" /></svg>
                    <span>0</span>
                </button>
                <button className='flex items-center justify-center space-x-2 px-2 h-10 rounded-md shadow-md border-[1px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" /></svg>
                    <span>Sign in / Register</span>
                </button>
            </div>
        </div>
    )
}

export default SearchBar