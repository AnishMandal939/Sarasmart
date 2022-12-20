import React, { useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import image1 from '../../Extras/images/christmas-drink-g5cd09c3ca_1920.jpg';
import image2 from '../../Extras/images/pexels-craig-adderley-1563355.jpg';
import image3 from '../../Extras/images/pexels-pixabay-65894.jpg';



const ImageSlider = () => {
    const carousel = useRef(null);

    return (
        <div className='relative w-full flex items-center justify-center'>
            <Carousel
                className='p-0 m-0 w-full'
                ref={carousel}
                showArrows={false}
                itemsToShow={1}
                renderPagination={({ pages, activePage, onClick }) => {
                    return (
                        <div className='flex absolute items-center justify-center -bottom-5 space-x-3'>
                            {pages.map(page => {
                                const isActivePage = activePage === page
                                return (
                                    isActivePage ?
                                        <span
                                            className="h-2 w-2 bg-gray-700 border-[1px] border-gray-500 rounded-full"
                                            key={page}
                                            onClick={() => onClick(page)}
                                            active={isActivePage}
                                        />
                                        :
                                        <span
                                            className="h-2 w-2 bg-white border-[1px] border-gray-500 rounded-full"
                                            key={page}
                                            onClick={() => onClick(page)}
                                            active={isActivePage}
                                        />


                                )
                            })}
                        </div>
                    )
                }}
            >
                <div className='w-full h-96'>
                    <img className='w-full' src={image1} alt="" />
                </div>
                <div className='w-full h-96'>
                    <img className='w-full' src={image2} alt="" />
                </div>
                <div className='w-full h-96'>
                    <img className='w-full' src={image3} alt="" />
                </div>
            </Carousel>

            {/* carousel button */}
            <div className="absolute w-full flex justify-between items-center px-5">
                <button
                    className=""
                    onClick={() => carousel.current.slidePrev()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"><path fill="white" fill-rule="evenodd" d="M15 7.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0Zm-8.5 2.707L3.793 7.5L6.5 4.793l.707.707l-1.5 1.5H11v1H5.707l1.5 1.5l-.707.707Z" clip-rule="evenodd" /></svg>
                </button>
                <button
                    className=""
                    onClick={() => carousel.current.slideNext()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"><path fill="white" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0Zm8.5-2.707L11.207 7.5L8.5 10.207L7.793 9.5l1.5-1.5H4V7h5.293l-1.5-1.5l.707-.707Z" clip-rule="evenodd" /></svg>
                </button>
            </div>
        </div>
    )
}

export default ImageSlider