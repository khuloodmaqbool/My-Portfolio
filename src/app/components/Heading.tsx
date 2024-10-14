"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface HeadingData {
  heading: string,
  para: string
}

export const Heading = ({ heading, para }:HeadingData) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <>
      <div  className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1  data-aos="fade-right"   style={{ fontFamily: "Anybody" }} className="stroke-heading sm:w-2/5 text-4xl  md:text-4xl lg:text-5xl font-black">{heading}</h1>
        <p  data-aos="fade-left" className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">{para}</p>
      </div>
    </>
  )
}