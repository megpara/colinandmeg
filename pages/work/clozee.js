import Link from "next/link";
import Layout from "../../components/Layout";
import SecondaryFooter from "../../components/SecondaryFooter";

export default function Clozee() {
    return (
        <Layout>
            <div className="w-full h-full md:h-[125%] flex items-center justify-center pt-[9rem] px-8 md:px-[10rem]">
                <div className="w-full h-full pb-12 flex flex-col items-center justify-center">
                    <div className="w-full h-full relative">
                        <iframe src="https://www.youtube.com/embed/Axd3LP1k6NI?si=QU7w1SUGgLglBOo3?autoplay=1&title=0&byline=0&portrait=0" className="absolute top-0 left-0 w-full h-full" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                    <p className="text-xs italic pt-8">
                    CloZee - Courage (feat. ROZET) (Official Music Video)<br />
                    Movement: Meg Paradowski<br />
                    Starring: Jalen Rashad<br />
                    Director of Photography: Jeremy Black<br /></p>
                </div>
            </div>
            <SecondaryFooter />
        </Layout>
    )
}