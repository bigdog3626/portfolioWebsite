import userData from "../constants/data";
import React from "react";

export default function Experience() {
    return (
        <section className="bg-neutral-100 dark:bg-neutral-800">
            <div className="max-w-6xl mx-auto h-48 bg-neutral-100">
                <h1 className=" text-5xl md:text-9xl font-bold pt-[4.6rem] pb-20 text-center md:text-left text-neutral-800">
                    Experience
                </h1>
            </div>
            <div className="-mt-10 bg-neutral-200 dark:bg-neutral-900">
                <div className="max-w-6xl grid grid-cols-1 mx-auto py-[7rem]">
                    {/* Experience card */}
                    {userData.experience.map((exp, idx) => (
                        <>
                            <ExperienceCard
                                key={idx}
                                title={exp.title}
                                desc={exp.desc}
                                year={exp.year}
                                company={exp.company}
                                companyLink={exp.companyLink}
                            />
                            {idx === userData.experience.length - 1 ? null : (
                                <div className="divider-container flex flex-col items-center -mt-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                                        <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                                    </div>
                                    <div className="w-1 h-24 bg-neutral-300 dark:bg-neutral-500 rounded-full -mt-2 shadow-sm"></div>
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
    return (
        <div className="md:relative experience-card border p-4 rounded-md shadow-xl bg-neutral-100 z-10 mx-4">
            <h1 className="md:absolute -top-10 md:-left-10 md:-top-10 text-xl text-gray-600 font-bold lg:text-4xl">
                {year}
            </h1>
            <h1 className="font-semibold text-xl text-neutral-900 ">{title}</h1>
            <a href={companyLink} className="text-neutral-700">
                {company}
            </a>
            <p className="text-neutral-500 dark:text-neutral-300 my-2">
                {desc}
            </p>
        </div>
    );
};
