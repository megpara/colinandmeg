import Layout from "../../components/Layout";
import Image from "next/image";

const credits = [
    {
        title: "Created & Directed by",
        name: "Megan Paradowski/EMPARA"
    },
    {
        title: "Director of Photography",
        name: "Colin Lupe"
    },
    {
        title: "Song",
        name: "Sir Etok x Hatis Noit"
    },
    {
        title: "Choreography",
        name: "Megan Paradowski/EMPARA"
    },
    {
        title: "Performed by",
        name: "Jacquelyn Tepper"
    },
    {
        title: "Edit by",
        name: "Megan Paradowski"
    },
    {
        title: "Color by",
        name: "Duran Castro"
    },
]

const images = [
    "/work/siretok/twisting.png",
    "/work/siretok/reaching.png",
    "/work/siretok/arching.png",
    "/work/siretok/laying.png",
    "/work/siretok/feet.png",
    "/work/siretok/tree.png",
]

export default function SirEtok() {
    return (
        <Layout>
            <div className="text-white block md:flex justify-between pt-[24vh] px-4 md:px-8  md:gap-8">
                    <div className="basis-1/3 md:basis-1/2 pb-4 pr-12 md:pb-0 tracking-widest">
                        <div className="font-display text-4xl">Sir Etok x Hatis Noit</div>
                        <div className="text-[#bab5b1] text-sm italic pt-8">
                            I fell in love with Hatis Noit in January 2024 and had the privilege of watching her perform live in LA that following April.
                            <br />
                            <br />
                            “The name Hatis Noit itself is taken from Japanese folklore, meaning the stem of the lotus flower. The lotus represents the living world, while its root represents the spirit world, therefore Hatis Noit is what connects the two.”
                            <br />
                            <br />
                            I’ve always viewed movement and performance as transcendent—a moving out of the physical world—and I feel a deep pull toward Hatis Noit’s way of art making. When Colin and I saw her live at 2220, she sang Aura, a completely a cappella album that felt like a series of portals opening into different worlds. We left with our mouths hanging open.
                            <br />
                            <br />
                            In response, I created this film with Jacquelyn and Colin in the forest, using Jacquelyn’s performance in tandem with Hatis Noit’s voice as a vessel to the root of the lotus flower—the spirit world. In our world on fire, we use this encapsulating metaphor to call out for guidance.
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
                        <iframe src="https://player.vimeo.com/video/1167573619?autoplay=1&title=0&byline=0&portrait=0" className="w-full absolute h-full top-0 left-0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
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
