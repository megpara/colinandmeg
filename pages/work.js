import { use, useState } from "react";
import Layout from "../components/Layout";
import Teaser from "../components/Teaser";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import SecondaryFooter from "../components/SecondaryFooter";

const works = [
    {
        media: "/work/olipopparty.jpg",
        title: "Olipop - Introducing Ginger Ale",
        type: "image",
        url: "/work/olipop",
    },
    {
        media: "/work/clozee.mp4",
        title: "CloZee - Courage (feat. ROZET) (Official Music Video)",
        type: "video",
        url: "/work/clozee",
    },
    {
        media: "/work/ritual/group.jpg",
        title: "Ritual",
        type: "image",
        url: "/work/ritual",
    },
    {
        media: "/work/nike.mp4",
        title: "Nike | Run Your Run",
        type: "video",
        url: "/work/nike",
    },
    {
        media: "/work/mandymoore.jpeg",
        title: "#MandyMoore | ByHeart",
        type: "image",
        url: "/work/byheart"
    },
    {
        media: "/work/veja.mp4",
        title: "VEJA Sneakers",
        type: "video",
        url: "/work/veja",
    },
    {
        media: "/work/bluemoon.jpg",
        title: "Blue Moon - Chromatics Music Video",
        type: "image",
        url: "/work/bluemoon",
    },
    {
        media: "wdtease.mov",
        title: "Well Done",
        type: "video",
        url: "/work/welldonefilm",
    },
    {
        media: "/work/siretok/running.jpg",
        title: "Sir Etok - Hatis Noit Music Video",
        type: "image",
        url: "/work/siretok",
    },
];

export default function Work() {
    const router = useRouter();
    const mockClick = () => {
    };

    return(
        <Layout>
            <Head>
                <title>Work</title>
                <meta
                name="description"
                content="Featured Projects"
                />
            </Head>
            <div className="w-full columns-1 md:columns-3 gap-8 md:gap-12 p-8 pt-48 relative">
                {works.map((work) => (
                    <div className="mb-8 md:mb-16 group relative cursor-pointer break-inside-avoid-column w-full relative" onClick={work.url ? () => router.push(work.url) : mockClick}>
                        {(work.type) == "image" && <Image src={work.media} alt="Project image" className="opacity-80 group-hover:opacity-100 duration-300 aspect-video object-cover" width={500} height={300} priority/>}
                        {(work.type) == "video" && <video loop autoPlay muted playsInline src={work.media} className="opacity-80 group-hover:opacity-100 duration-300 aspect-video"/>}
                        <div className="text-[#bab5b1] group-hover:text-[#f2ede2] duration-300 pt-6">
                            <div className="text-xs pb-1">{work.title}</div>
                        </div>
                    </div>
                ))}
            </div>
            <SecondaryFooter />
        </Layout>
    )
}