"use client"
import { MdOutlinePhone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { CgMail } from "react-icons/cg";
import { Heading } from "./Heading";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const iconClasses = `w-12 h-12 pe-3 `

    interface ContactType {
        icon: JSX.Element,
        para: string
    }

    const Contact: ContactType[] = [
        {
            icon: <CgMail style={{ color: "white" }} className={`${iconClasses}`} />,
            para: "khuloodmaqbool3@gmail.com"
        },
        {
            icon: <MdOutlinePhone style={{ color: "white" }} className={`${iconClasses}`} />,
            para: "+92 319 3885232"
        },

        {
            icon: <GrLocation style={{ color: "white" }} className={`${iconClasses}`} />,
            para: "Karachi, Pakistan"
        }
    ]

    const headingData = {
        heading: "LETS CONNECT",
        para: "I am open to new projects and collaborations. Feel free to connect with me via social media or send a message!"
    }

    return (
        <>
            <div className="h-screen flex flex-col justify-center" >
                <Heading {...headingData} />
                <div className="flex justify-between  flex-wrap md:flex-nowrap lg:flex-nowrap ">
                    {
                        Contact.map((crntele, index) => {
                            return (
                                <>
                                    <div data-aos="fade-up" key={index} className=" bg-dull_grey_purple flex items-center justify-center w-full m-3 h-28 border border-dull_purple rounded-lg">
                                        <div style={{ color: "color: rgb(148 163 184)" }} >{crntele.icon}</div>
                                        <p className="text-slate-300" >{crntele.para}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Contact;