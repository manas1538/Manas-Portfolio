import React from 'react'
import TextPressure from './TextPressure';

const Hero = () => {
    return (
        <>
            <section className=' flex justify-center items-center p-2 h-[99vh]  w-full rounded-lg'>

                <div className='w-full h-[85vh]  mt-10 md:mt-20 flex justify-evenly gap-2 items-center flex-col rounded-lg'>



                    <div className=" mt-20 md:mt-0 flex justify-center items-center flex-col  font-bold text-black leading-none ">

                        <h3 className="text-black italic text-md">Hi, I'm</h3>

                        <TextPressure
                            text="MANAS!"
                            letterSpacing="30px"
                            textColor="#000000"
                        />
                    </div>

                    <div className="  p-4 rounded-md flex justify-between items-center flex-wrap sm:gap-4 text-black font-medium text-lg">
                        <h2 className="text-3xl font-semibold flex justify-start text-left flex-wrap">
                            A Passionate <span className="text-blue-500 text-2xl md:text-3xl"> Full-Stack Developer</span>
                        </h2>

                    </div>

                    <div className='flex gap-6 p-4 flex-wrap sm:mb-4'>
                        <button>
                            <a href="#projects" className="text-md italic mt-4 bg-blue-500 p-2 rounded-md text-white font-semibold hover:bg-blue-700 transition-colors">
                                View My Projects
                            </a>
                        </button>

                        <button>
                            <a href="#contact" className="text-md mt-4 italic bg-green-500 p-2 rounded-md text-white font-semibold hover:bg-green-700 transition-colors">
                                Contact Me
                            </a>
                        </button>

                        <button>
                            <a href="/Manas_Resume.pdf" download className="text-md mt-4 italic bg-gray-800 p-2 rounded-md text-white font-semibold hover:bg-gray-900 transition-colors">
                                Download Resume
                            </a>


                        </button>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Hero