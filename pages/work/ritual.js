import Layout from "../../components/Layout";
import Image from "next/image";

const credits = [
    {
        title: "Created & Directed by",
        name: "Megan Paradowski/EMPARA & SUUVI"
    },
    {
        title: "Director of Photography",
        name: "Colin Lupe"
    },
    {
        title: "Original Score",
        name: "SUUVI"
    },
    {
        title: "Choreography",
        name: "Megan Paradowski/EMPARA"
    },
    {
        title: "Choreography Assistant",
        name: "Mia Moraru"
    },
    {
        title: "Performed by",
        name: "Skye Kita, Maddie Lacambra, Audrey Sides, Hope Spears, SUUVI, Jacquelyn Tepper, Marco Vega"
    },
    {
        title: "Edit by",
        name: "Megan Paradowski"
    },
    {
        title: "Color by",
        name: "Duran Castro"
    },
    {
        title: "Photography by",
        name: "Teal Thomsen"
    },
]

const images = [
    "/work/ritual/skye.jpg",
    "/work/ritual/hope.jpg",
    "/work/ritual/audrey.jpg",
    "/work/ritual/marco.jpg",
    "/work/ritual/crew.jpg",
]

export default function Ritual() {
    return (
        <Layout>
            <div className="text-white block md:flex justify-between pt-[24vh] px-4 md:px-8  md:gap-8">
                    <div className="basis-1/3 md:basis-1/2 pb-4 pr-12 md:pb-0 tracking-widest">
                        <div className="font-display text-4xl">Ritual</div>
                        <div className="text-[#bab5b1] text-sm italic pt-8"><strong className="text-white">Ritual</strong> is a cyclical exploration of confinement and freedom. Each section of the piece is designed to stand on its own or be performed out of sequence as part of a larger cycle. In this structure, the work examines how the primal became civilized, exploring what is constrained, what is preserved, and what resists. Can the once-free escape suppression? Can the civilized step beyond the intricate boundaries of civilization?
                            <br />
                            <br />
                            As artists, SUUVI and Megan Paradowski came together at a similar moment in their lives, both expanding their practices and questioning the ideas they had been trained to believe. Out of the complexity of grappling with conflicting truths—while navigating the false certainty of adulthood in modern society—<strong className="text-white">Ritual</strong> emerged. The work is both an ode to their pasts and an expression of faith in the cyclical nature of freedom.
                        </div>
                    </div>
                    <div className="basis-2/3 md:basis-1/2 text-[#bab5b1] text-sm italic flex flex-col divide-y-[1px] divide-[#bab5b1]">
                    {credits.map((credit, index) => (
                        <div className={"flex justify-between items-center pb-2" + (index !== 0 ? " pt-2" : "")}>
                            <div className="basis-1/2">
                                {credit.title}
                            </div>
                            {credit.ref ? (
                                <div className="flex flex-col basis-2/6">
                                <a className="underline" href={credit.ref} target="_blank">{credit.name}</a>
                                {credit.ref2 && <a className="underline" href={credit.ref2} target="_blank">{credit.name2}</a>}
                                </div>
                            ) : (
                                <div className="basis-2/6">
                                    {credit.name}
                                </div>
                            )}
                            
                        </div>
                    ))}
                    <div className="w-full pt-[70%] relative">
                        <iframe src="https://player.vimeo.com/video/1175342363?h=fb0e4202f5&autoplay=1&title=0&byline=0&portrait=0" className="w-full absolute h-full top-0 left-0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
                    </div>
                    </div>
                </div>
                <div className="text-white w-full columns-1 md:columns-3 gap-2 md:gap-4 py-8 px-4 md:px-8 pb-[15vh] relative">
                    {images.map((photo, index) => (
                        <div className="w-full flex flex-col items-center justify-center">
                        <Image src={photo} alt="Photo of Simulacra" width={500} height={300} className="pb-2 md:pb-4" />
                        </div>
                    ))}
                </div>
        </Layout>
    )
}
