import React from 'react'
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
// import ImageManas from '../../assets/ImageManas.png';
import manasImg from '../../assets/manas11.jpg';

const About = () => {


    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    ];

    // Alternative with image sources
    const imageLogos = [
        { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
        { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
        { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
    ];
    return (
        <>

            <div className=' w-full h-auto flex justify-center items-center flex-col ' id='projects'>

                <h1 className='text-4xl mt-10 font-bold uppercase italic text-center border-2 px-25 py-4 rounded-2xl sm:text-2xl '>About Me</h1>


                    
                <div className=' w-full p-2 m-2 flex justify-center items-center text-center'>
                
                    <div className=' w-[40%] md:w-[60%] p-2 m-2 text-center'>

                        <h1 className='mb-9 text-shadow-black bold text-4xl italic'>Full Stack Web Developer</h1>
                        I’m Manas Kumar, a web developer with a strong foundation in HTML, CSS, JavaScript, and React. I focus on building clean, responsive, and user-friendly applications that solve real problems.

                        I believe in solid fundamentals, disciplined coding practices, and continuous improvement. I value traditional problem-solving approaches, but I’m always open to smarter, more efficient ways to build better products.

                        Currently, I’m focused on sharpening my development skills, creating meaningful projects, and contributing to teams that value quality, consistency, and growth.
                    </div>
                    <div className='   w-fit h-fit p-2 m-2 flex justify-center items-center rounded-full overflow-hidden'>
                        <img src={manasImg} alt="Manas" className='h-70 w-70 object-cover rounded-full' />
                    </div>
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


                     <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }} className='mt-15'>
                    <LogoLoop
                        logos={techLogos}
                        speed={90}
                        direction="left"
                        logoHeight={40}
                        gap={40}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#ffffff"
                        ariaLabel="Technology partners"
                    />
                </div> 

            </div>

        </>
    )
}

export default About