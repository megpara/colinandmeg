import Layout from "../../components/Layout";
import Image from "next/image";
import SecondaryFooter from "../../components/SecondaryFooter";

const images = [
    "/work/siretok/twisting.jpg",
    "/work/siretok/reaching.jpg",
    "/work/siretok/arching.jpg",
    "/work/siretok/laying.jpg",
    "/work/siretok/feet.jpg",
    "/work/siretok/tree.jpg",
]

export default function SirEtok() {
    return (
        <Layout>
            <div className="w-full h-[85%] md:h-full flex items-center justify-center pt-[9rem]">
                <div className="w-full h-full pb-12 flex flex-col items-center justify-center">
                    <div className="w-full h-full relative">
                        <iframe src="https://player.vimeo.com/video/1167573619?h=5b5219e589&autoplay=1&title=0&byline=0&portrait=0" className="absolute top-0 left-0 w-full h-full" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                    <p className="text-xs italic pt-8">
                    Hatis Noit — Sir Etok Music Video<br />
                    Directed by Meg Paradowski & Colin Lupe<br />
                    Director of Photography: Colin Lupe<br />
                    Movement: Meg Paradowski<br />
                    Starring: Jacquelyn Tepper<br />
                    Edit: Colin Lupe & Meg Paradowski<br />
                    Color: Duran Castro<br /></p>
                </div>
            </div>
            <div className="w-full columns-1 md:columns-3 gap-2 md:gap-4 py-8 px-4 md:px-8 pb-[15vh] relative">
                {images.map((photo, index) => (
                    <div className="w-full flex flex-col items-center justify-center">
                    <Image src={photo} alt="Photo of Sir Etok music video" width={500} height={300} className="pb-2 md:pb-4" />
                    </div>
                ))}
            </div>
            <SecondaryFooter />
        </Layout>
    )
}
