"use client";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
    interface LinksType {
        idLink: string,
        icon: JSX.Element,
    }
    const Links: LinksType[] = [
        {
            idLink: "https://www.linkedin.com/in/khulood-maqbool-b45aa3255/",
            icon: <FaLinkedinIn className="w-10 h-10" />
        },
        {
            idLink: "https://github.com/khuloodmaqbool",
            icon: <FaGithub className="w-10 h-10" />
        },
        {
            idLink: "mailto:khuloodmaqbool3@gmail.com",
            icon: <SiGmail className="w-10 h-10" />
        }
    ]
    return (
        <>
            <div className="flex bg-dull_grey_purple h-24 justify-center items-center mt-8">
                {
                    Links.map((crntele, index) => {
                        return (
                            <Link key={index} href={crntele.idLink} target="_blank">
                                <div className="bg-slate-400 hover:bg-slate-300 rounded-full mx-4 w-14 p-2 h-14 flex items-center justify-center" >
                                    <div>{crntele.icon}</div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Footer;