import React from "react";
import userData from "../constants/data";

export default function AboutMe() {
    return (
        <section className="bg-neutral-100">
            <div className="max-w-6xl mx-auto h-48 bg-neutral-100">
                <h1 className=" text-5xl md:text-9xl font-bold pt-[4.6rem] pb-20 text-center md:text-left text-neutral-700">
                    About Me.
                </h1>
            </div>
            <div className="bg-neutral-200 -mt-10">
                <div className="text-container max-w-6xl mx-auto pt-20">
                    <p
                        className="leading-loose text-2xl md:text-4xl font-semibold  mx-4 text-neutral-500"
                        style={{ lineHeight: "3rem" }}
                    >
                        I am working as a{" "}
                        <span className="text-bold text-red-500 underline underline-offset-auto">
                            Senior Software Engineer @ Analatom Inc.{" "}
                        </span>{" "}
                        <p className="py-3">
                            Currently working on{" "}
                            <a
                                className="bg-red-500 rounded-md px-2 py-1 text-white"
                                href={userData.about.currentProjectUrl}
                            >
                                {userData.about.currentProject} 🚰
                            </a>
                        </p>
                    </p>
                </div>
            </div>
            <div className="bg-neutral-100 px-4">
                <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
                    {/* Social Buttons */}
                    <div className="inline-flex flex-col">
                        <div>
                            <h1 className="text-xl font-semibold text-neutral-700">
                                Contact
                            </h1>
                            <p className="text-lg text-neutral-500 mt-4">
                                For any sort help / enquiry, shoot a{" "}
                                <a
                                    href={`mailto:${userData.email}`}
                                    className="text-neutral-800 border-b-2 border-neutral-800 dark:border-neutral-300 font-bold"
                                >
                                    mail
                                </a>{" "}
                                and I'll get back. I swear.
                            </p>
                        </div>
                        <div className="mt-8">
                            <h1 className="text-xl font-semibold text-neutral-700 ">
                                Job Opportunities
                            </h1>
                            <p className="text-lg text-neutral-500 mt-4 ">
                                I am not currently looking for any employment
                                oppurtunities. Check my{" "}
                                <a
                                    href={userData.resumeUrl}
                                    target="__blank"
                                    className="text-neutral-800 border-b-2 border-neutral-800 dark:border-neutral-300 font-bold "
                                >
                                    LinkedIn
                                </a>{" "}
                                to get a better understanding of my Skillset and
                                experience
                            </p>
                        </div>
                        {/* Social Links */}
                        <h1 className="text-xl font-semibold text-neutral-700 mt-8 ">
                            Social Links
                        </h1>
                        <div className="mt-4 ml-4">
                            <div className="flex flex-row justify-start items-center ">
                                <a
                                    href={userData.socialLinks.facebook}
                                    className="flex flex-row items-center space-x-4 group"
                                >
                                    <div className="my-4">&rarr;</div>
                                    <p className="text-lg text-neutral-500 font-mono relative overflow-hidden ">
                                        <div className="absolute h-0.5 w-full bg-neutral-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                                        Facebook
                                    </p>
                                </a>
                            </div>
                            <div className="flex flex-row justify-start items-center">
                                <a
                                    href={userData.socialLinks.twitter}
                                    className="flex flex-row items-center space-x-4 group"
                                >
                                    <div className="my-4">&rarr;</div>
                                    <p className="text-lg text-neutral-500 font-mono relative overflow-hidden ">
                                        <div className="absolute h-0.5 w-full bg-neutral-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                                        Twitter
                                    </p>
                                </a>
                            </div>
                            <div className="flex flex-row justify-start items-center">
                                <a
                                    href={userData.socialLinks.github}
                                    className="flex flex-row items-center space-x-4 group"
                                >
                                    <div className="my-4">&rarr;</div>
                                    <p className="text-lg text-neutral-500 font-mono relative overflow-hidden ">
                                        <div className="absolute h-0.5 w-full bg-neutral-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                                        GitHub
                                    </p>
                                </a>
                            </div>
                            <div className="flex flex-row justify-start items-center">
                                <a
                                    href={userData.socialLinks.linkedin}
                                    className="flex flex-row items-center space-x-4 group"
                                >
                                    <div className="my-4">&rarr;</div>
                                    <p className="text-lg text-neutral-500 font-mono relative overflow-hidden ">
                                        <div className="absolute h-0.5 w-full bg-neutral-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                                        LinkedIn
                                    </p>
                                </a>
                            </div>
                            <div className="flex flex-row justify-start items-center">
                                <a
                                    href={userData.socialLinks.twitter}
                                    className="flex flex-row items-center space-x-4 group"
                                >
                                    <div className="my-4">&rarr;</div>
                                    <p className="text-lg text-neutral-500 font-mono relative overflow-hidden ">
                                        <div className="absolute h-0.5 w-full bg-neutral-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                                        Instagram
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Text area */}
                    <div className="col-span-1 md:col-span-2 ">
                        {userData.about.description?.map((desc, idx) => (
                            <p
                                key={idx}
                                className="text-xl text-neutral-500 mb-4 "
                            >
                                {desc}
                            </p>
                        ))}

                        <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-neutral-50">
                            Tech Stack
                        </h1>
                        <div className="flex flex-row flex-wrap mt-8 ">
                            <img
                                src="https://icon-library.com/images/django-icon/django-icon-0.jpg"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://www.freeiconspng.com/thumbs/c-logo-icon/c--logo-icon-0.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://mshr-h.gallerycdn.vsassets.io/extensions/mshr-h/veriloghdl/1.5.3/1639707450533/Microsoft.VisualStudio.Services.Icons.Default"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1200px-SQLite370.svg.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/23593/ga-logo-gear.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
