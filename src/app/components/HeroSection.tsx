import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const HeroSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div data-aos="fade-right" className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h5 style={{ fontFamily: "Dancing Script" }} className="text-purple_color mb-4" >Welcome to my Portfolio</h5>
                        <h1 style={{ fontFamily: "Anybody" }} className="mb-4 text-white text-4xl font-black lg:text-6xl md:text-5xl"> Hi! I&#39;m Khulood Maqbool
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple_color to-dull_blue" >
                                Front End Developer
                            </span></h1>

                        <p className="mb-8 leading-relaxed">Welcome to my portfolio! I&#39;m a passionate front-end developer specializing in creating beautiful and functional web applications. With expertise in HTML, CSS, JavaScript, React, and Next.js, I build responsive, user-friendly websites that bring your ideas to life with clean, efficient code and a strong focus on user experience.</p>



                        <div className="flex justify-center">
                            <Link href="">
                                <Button variant="outline" >Download CV</Button></Link>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 main">
                        <img className="object-cover object-center rounded" alt="herosection_img" src="herosection_img.png" />
                    </div>
                </div>
            </section>
        </>
    )
}