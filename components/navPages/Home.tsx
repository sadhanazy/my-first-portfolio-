'use client';

import React, { useState } from 'react';
import Lottie from 'lottie-react';
import Typewriter from 'typewriter-effect';
import scrollDownAnimation from '@/lib/scroll-down.json';
import { jetbrainsMono } from '@/app/font';
import Image from 'next/image';
import SadhanaImg from "@/public/Sadhana.jpeg";
import SadhanaImg2 from "@/public/Sadhana2.jpeg"
import { MapPin } from 'lucide-react';
import Socials from '../Socials';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';
export function Home() {
    const [isHovered, setIsHovered] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/sadhana-1resume.pdf';
        link.download = 'sadhana-1resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    

    return (
        <div id='home' className="w-full max-w-4xl flex flex-col items-center justify-center px-6 pt-20 pb-65 sm:min-h-screen relative">
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 w-full max-w-5xl">
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        <h1 className="text-4xl sm:text-6xl font-bold ">
                            Hey, I&apos;m <span className='text-[#e8390d]'>Sadhana</span>
                        </h1>
                        <span
                            className="text-4xl sm:text-5xl"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{
                                transformOrigin: '70% 70%',
                                animation: isHovered ? 'wave 1.2s ease-in-out infinite' : 'none',
                                display: 'inline-block',
                            }}
                        >
                            👋
                        </span>
                    </div>
                    <p className={` ${jetbrainsMono.className} flex items-center mt-4 text-[#dd431d] gap-2 text-sm sm:text-lg text-right`}> <MapPin /> Bhubneswar , Odisha, India</p>

                    <span className="tailwind-wrapper mt-4 text-lg sm:text-3xl font-medium block text-left text-zinc-800 dark:text-zinc-200">
                        <Typewriter
                            options={{
                                strings: ['FULL STACK DEVELOPER', 'IT STUDENT'],
                                autoStart: true,
                                loop: true,
                                delay: 20,
                                deleteSpeed: 5,
                            }}
                        />
                    </span>

                    <div className="flex flex-wrap gap-4 items-center">
                        <Socials />
                        <InteractiveHoverButton onClick={handleDownload} />
                    </div>


                    {/* <p
                        className={`mt-4 text-sm sm:text-lg dark:text-zinc-500 text-justify leading-relaxed ${jetbrainsMono.className}`}
                    >
                        Hey, I'm *Sadhana Dash, currently pursuing **B.Tech in Computer Science and Engineering* at *Raajdhani Engineering College*.  
I'm a passionate *Full Stack Developer* who loves building dynamic, responsive, and user-friendly web applications. I enjoy exploring modern technologies, learning new frameworks, and solving real-world problems through code.  

My current tech stack revolves around the *MERN (MongoDB, Express, React, Node.js)* ecosystem, and I’m also skilled in *Next.js, **Tailwind CSS, and **TypeScript*.  
I aim to craft beautiful, functional, and performance-oriented digital experiences that make a difference.

                    </p> */}
                </div>

                {/* Image Section */}
                <div
                    className="w-48 h-48 sm:w-70 sm:h-70 relative shrink-0 rounded-full overflow-hidden transition-all duration-300"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Base image */}
                    <Image
                        src={SadhanaImg}
                        alt="Sadhana"
                        fill
                        className={`object-cover rounded-full transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"
                            }`}
                    />

                    {/* Hover image */}
                    <Image
                        src={SadhanaImg2}
                        alt="Sadhana Hover"
                        fill
                        className={`object-cover rounded-full absolute top-0 left-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                            }`}
                    />
                </div>

            </div>

            {/* Scroll Down Animation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 z-10 hidden md:block">
                <Lottie animationData={scrollDownAnimation} loop />
            </div>
        </div>
    );
}
