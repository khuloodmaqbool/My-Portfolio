"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsCodeSlash } from "react-icons/bs";
import { Heading } from "./Heading";
import project from "./projects.json"

export const MyProjects = () => {

    
    const headingData = {
        heading: "MY PROJECTS",
        para: `I have built various projects that demonstrate my front-end skills in HTML, CSS, JavaScript, and React. Explore my work below!`,
    }

    return (
        <>
            <section className="body-font">
                <div className="container px-5 py-24 mx-auto">
                    <Heading {...headingData} />
                    <div className="flex flex-wrap justify-around lg:justify-between -mx-4 mb-6">
                        {project.map((crntele, index) => (
                            <div
                                data-aos="fade-up"
                                className="p-4 w-full md:w-88 mb-9 border border-dull_purple rounded-md project-card bg-dull_grey_purple"
                                key={index}
                            >
                                <div className="rounded-lg h-64 overflow-hidden">

                                    <img alt="content" className="object-contain rounded-lg h-full w-full" src={crntele.image} />
                                    
                                </div>
                                <h2 className="text-xl font-medium text-white mt-5">{crntele.title}</h2>
                                <p className="text-base leading-relaxed mt-2">{crntele.para}</p>

                                <div className="flex items-center justify-between">
                                    <div className="text-indigo-500 inline-flex items-center">
                                        <Link target="_blank" href={crntele.liveLink}>
                                            <Button variant="outline" className="mt-3 sm:text-sm">
                                                Visit
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Button>
                                        </Link>
                                        <Link
                                            target="_blank"
                                            href={crntele.gitHubLink}
                                            className="p-2 text-white bg-dull_purple rounded-full h-10 mt-2 ml-2 w-10 flex items-center justify-center"
                                        >
                                            <BsCodeSlash className="w-full h-full" />
                                        </Link>
                                    </div>

                                    <div className="mt-3">
                                        {crntele.icons.map((icon, i) => (
                                            <span key={i} className="text-gray-400 inline-flex items-center leading-none text-sm pr-3 py-1">
                                                <img className="w-6 h-6" src={icon} alt={icon} />
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}