import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer"


export default function ContainerBlock({ children, ...customMeta }) {
    const router = useRouter();

    const meta = {
        title: "Dylan Meyer - Designer, Developer, and Engineer",
        description: `I've been developing full stack applications for 3 years straight, Get in touch to know more. `,
        image: "/avatar.png",
        type: "website",
        ...customMeta,
    };


    return (

        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    content={`https://portfolio-website-six-lac.vercel.app${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://portfolio-website-six-lac.vercel.app${router.asPath}`}
                />

                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" conent="Dylan Meyer" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@dylmeyer" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" conetnt={meta.image} />
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />

                )}



            </Head>
            <main classname="dark:bg-white w-full">
                <Navbar />
                <div>{children}</div>
                <Footer />
            </main>
        </div>
    );
}