"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome } from "react-icons/go";
import { VscGithubProject } from "react-icons/vsc";
import { RiContactsLine } from "react-icons/ri";
import { SiHyperskill } from "react-icons/si";
import { Button } from "@/components/ui/button";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const SideBar = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;

    const link_style = `hover:bg-gray-700 p-2 block rounded flex items-center`;

    return (
        // bg-gray-800
        <div className="h-screen w-1/5 text-white flex flex-col fixed lg:block md:block hidden z-10  bg-dull_grey_purple ">
            <div data-aos="fade-right" className="p-6">
                <img className="w-10 float-left" src="logo.png" alt="" /> <h1 className="text-2xl font-bold ms-4">KM</h1>
            </div>
            <nav data-aos="fade-right" className="flex-1 px-4 py-2">
                <ul>
                    <li className="mb-6">
                        <Link href="/" className={`${link_style} ${isActive("/") ? "bg-gray-700 border-b-2 border-purple_color " : null}`}>
                            <GoHome className="w-8 h-8 mr-2" />
                            Home
                        </Link>
                    </li>

                    <li className="mb-6">
                        <Link href="/skills" className={`${link_style} ${isActive("/skills") ? "bg-gray-700 border-b-2 border-purple_color" : null}`}>
                            <SiHyperskill className="w-8 h-8 mr-2" />
                            My Skills
                        </Link>
                    </li>


                    <li className="mb-6">
                        <Link href="/projects" className={`${link_style} ${isActive("/projects") ? "bg-gray-700 border-b-2 border-purple_color" : null}`}>
                            <VscGithubProject className="w-8 h-8 mr-2" />
                            Projects
                        </Link>
                    </li>


                    <li className="mb-6">
                        <Link href="/contact" className={`${link_style} ${isActive("/contact") ? "bg-gray-700 border-b-2 border-purple_color" : null}`}>
                            <RiContactsLine className="w-8 h-8 mr-2" />
                            Contact
                        </Link>
                    </li>

                    <div className="mt-8" >

                        <Link href="">
                            <Button variant="outline" >
                                Download CV
                            </Button>
                        </Link>

                    </div>
                </ul>
            </nav>
        </div>
    );
};
