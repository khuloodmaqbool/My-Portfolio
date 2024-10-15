"use client"
import { Heading } from "./Heading";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    interface SkillSec1Type {
        heading: string,
        inpVal: number,
        percent: string,
        icon: string,
        rangeClass: string
    }
    const skillSec1: SkillSec1Type[] = [{
        heading: "HTML",
        inpVal: 80,
        percent: "80%",
        icon: "html.png",
        rangeClass: "range-1"

    },
    {
        heading: "CSS",
        inpVal: 80,
        percent: "80%",
        icon: "css.png",
        rangeClass: "range-2"
    },
    {
        heading: "JAVASCRIPT",
        inpVal: 80,
        percent: "80%",
        icon: "javascript.png",
        rangeClass: "range-3"

    },
    {
        heading: "BOOTSTRAP",
        inpVal: 80,
        percent: "80%",
        icon: "bootstrap.png",
        rangeClass: "range-4"

    },
    {
        heading: "UI/UX",
        inpVal: 80,
        percent: "80%",
        icon: "figma.png",
        rangeClass: "range-4"

    },

    ]

    const skillSec2: SkillSec1Type[] = [{
        heading: "TYPESCRIPT",
        inpVal: 60,
        percent: "60%",
        icon: "typescript.png",
        rangeClass: "range-5"

    },
    {
        heading: "TAILWIND CSS",
        inpVal: 70,
        percent: "70%",
        icon: "tailwind.png",
        rangeClass: "range-6"
    },
    {
        heading: "REACT",
        inpVal: 60,
        percent: "60%",
        icon: "react.png",
        rangeClass: "range-7"

    },
    {
        heading: "NEXT JS",
        inpVal: 60,
        percent: "60%",
        icon: "nextjs.png",
        rangeClass: "range-8"

    },
    {
        heading: "AOS",
        inpVal: 90,
        percent: "90%",
        icon: "aos.png",
        rangeClass: "range-9"

    }
    ]

    const headingData = {
        heading: "MY SKILLS",
        para: "I specialize in HTML, CSS, JavaScript, React, and responsive design. I&#39;m always learning and staying up-to-date with the latest web trends"
    }

    return (
        <>
            <div className="py-24" >

                <Heading {...headingData} />


                <div className="flex justify-between flex-wrap xl:flex-nowrap md:flex-nowrap " >
                    <section data-aos="fade-up" className="text-gray-600 body-font " >
                        <div className="container  mx-auto flex flex-wrap justify-center md:justify-start lg: justify-end flex-wrap">
                            {/* First Item */}

                            {
                                skillSec1.map((crntele, index) => {
                                    return (
                                        <>
                                            <div key={index} className="flex relative px-3 w-4/5   py-5 sm:items-center ">
                                                <div className="flex-grow   flex sm:items-center items-start flex-col sm:flex-row">
                                                    <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                        <img className="w-full h-full" src={crntele.icon} alt="" />
                                                    </div>
                                                    <div className="flex-grow w-full  sm:pl-6 mt-6 sm:mt-0">

                                                        <div className="flex justify-between">
                                                            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl text-white">{crntele.heading}</h2>
                                                            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl text-white">{crntele.percent}</h2>
                                                        </div>
                                                        <input className={`w-full ${crntele.rangeClass}`} type="range" value={crntele.inpVal} />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </section>


                    <div className="skill-line " >
                        {/* <div className="mx-4 flex-shrink-0 w-4 h-4 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-white relative z-10 title-font font-medium text-sm"></div> */}
                        <div className="mx-4 h-full w-6 inset-y-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        {/* <div className="mx-4 flex-shrink-0 w-4 h-4 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-white relative z-10 title-font font-medium text-sm"></div> */}
                    </div>

                    <section data-aos="fade-up" className="text-gray-600 body-font">
                        <div className="container px-3 mx-auto flex  justify-center md:justify-end lg: justify-end flex-wrap">
                            {
                                skillSec2.map((crntele) => {
                                    return (
                                        <>
                                            <div className="flex w-4/5  relative py-5 sm:items-center">
                                                <div className="flex-grow flex sm:items-center items-start flex-col sm:flex-row">
                                                    <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                        <img className="w-full h-full" src={crntele.icon} alt="" />
                                                    </div>
                                                    <div className="flex-grow w-full sm:pl-6 mt-6 sm:mt-0">
                                                        <div className="flex justify-between">
                                                            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl text-white">{crntele.heading}</h2>
                                                            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl text-white">{crntele.percent}</h2>
                                                        </div>
                                                        <input className={`w-full ${crntele.rangeClass}`} type="range" value={crntele.inpVal} />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Section;
