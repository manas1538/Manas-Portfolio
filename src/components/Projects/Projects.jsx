import React from 'react'
import TiltedCard from './TiltedCard';
import Prism from '../Home/Prism';

const projects = () => {
    return (
        <>
            <div className=' w-full h-auto flex justify-center items-center flex-col p-4 mt-2 ' id='projects'>
                {/* <Prism /> */}
                <h1 className='text-4xl mt-10 font-bold uppercase italic text-center border-2 px-25 py-4 rounded-2xl sm:text-2xl '>Recent Projects</h1>

                <div className='  flex justify-center items-center flex-wrap  gap-4 mt-10 w-full h-fit'>


                    <div className=' p-2 m-3 mt-5 md:ml-15 sm:ml-0 w-87.5 py-6 flex justify-center items-center border-b-2 border-gray-300 rounded-lg'>

                        <TiltedCard
                            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="VideoDN!"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text p-2 m-2">
                                    VideoDN!
                                </p>
                            }
                        />
                    </div>


                    <div className=' sm:w-[90%] md:w-[40%] p-2 m-3 flex justify-start items-start flex-wrap gap-4 '>
                        <h2 className='text-white italic font-bold text-2xl text-center'>VIDEODN! - Youtube Video Downloader</h2>
                        <p className=' text-justify'>
                            VideoDN! is a modern web platform designed to deliver a smooth, engaging video-browsing experience, enabling users to discover, view. and download videos effortlessly.
                        </p>

                        <div className='w-full italic text-sm flex justify-start items-start flex-col gap-2 mt-2'>
                            <p>⚡ Fast and responsive UI optimized for desktop and mobile devices.</p>
                            <p>🔍 Structured content organization for easy navigation and. </p>
                            <p>🧠 Efficient state and component management for  user .</p>
                            <p>🎨 Clean, minimal design focused on usability and visual .</p>
                        </div>

                    </div>

                </div>








                
                <div className='  flex justify-center items-center flex-wrap  gap-4 mt-10 w-full h-fit'>


                    <div className=' p-2 m-3 mt-5 md:ml-15 sm:ml-0 w-87.5 py-6 flex justify-center items-center border-b-2 border-gray-300 rounded-lg'>

                        <TiltedCard
                            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="VideoDN!"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text p-2 m-2">
                                    VideoDN!
                                </p>
                            }
                        />
                    </div>


                    <div className=' w-[90%]  p-2 m-3 flex justify-start items-start flex-wrap gap-4  md:w-[40%]'>
                        <h2 className='text-white italic font-bold text-2xl text-center'>VIDEODN! - Youtube Video Downloader</h2>
                        <p className=' text-justify'>
                            VideoDN! is a modern web platform designed to deliver a smooth, engaging video-browsing experience, enabling users to discover, view. and download videos effortlessly.
                        </p>

                        <div className='w-full italic text-sm flex justify-start items-start flex-col gap-2 mt-2'>
                            <p>⚡ Fast and responsive UI optimized for desktop and mobile devices.</p>
                            <p>🔍 Structured content organization for easy navigation and. </p>
                            <p>🧠 Efficient state and component management for  user .</p>
                            <p>🎨 Clean, minimal design focused on usability and visual .</p>
                        </div>

                    </div>

                </div>






                
                <div className='  flex justify-center items-center flex-wrap  gap-4 mt-10 w-full h-fit'>


                    <div className=' p-2 m-3 mt-5 md:ml-15 sm:ml-0 w-87.5 py-6 flex justify-center items-center border-b-2 border-gray-300 rounded-lg'>

                        <TiltedCard
                            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="VideoDN!"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text p-2 m-2">
                                    VideoDN!
                                </p>
                            }
                        />
                    </div>


                    <div className=' w-[90%]  p-2 m-3 flex justify-start items-start flex-wrap gap-4  md:w-[40%]'>
                        <h2 className='text-white italic font-bold text-2xl text-center'>VIDEODN! - Youtube Video Downloader</h2>
                        <p className=' text-justify'>
                            VideoDN! is a modern web platform designed to deliver a smooth, engaging video-browsing experience, enabling users to discover, view. and download videos effortlessly.
                        </p>

                        <div className='w-full italic text-sm flex justify-start items-start flex-col gap-2 mt-2'>
                            <p>⚡ Fast and responsive UI optimized for desktop and mobile devices.</p>
                            <p>🔍 Structured content organization for easy navigation and. </p>
                            <p>🧠 Efficient state and component management for  user .</p>
                            <p>🎨 Clean, minimal design focused on usability and visual .</p>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}

export default projects