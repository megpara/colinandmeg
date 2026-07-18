import Link from "next/link";
import Layout from "../../components/Layout";
import SecondaryFooter from "../../components/SecondaryFooter";

export default function BlueMoon() {
    return (
        <Layout>
            <div className="w-full h-[85%] md:h-full flex items-center justify-center pt-[9rem]">
                <div className="w-full h-full pb-12 flex flex-col items-center justify-center">
                    <div className="w-full h-full relative">
                        <iframe src="https://player.vimeo.com/video/1208149042?h=2e4f3aa100&autoplay=1&title=0&byline=0&portrait=0" className="absolute top-0 left-0 w-full h-full" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                    <p className="text-xs italic pt-8">
                    Chromatics — Blue Moon Music Video<br />
                    Directed by Colin Lupe & Meg Paradowski<br />
                    Director of Photography: Colin Lupe<br />
                    Choreography: Meg Paradowski<br />
                    Projection: Colin Lupe<br />
                    Edit: Colin Lupe & Meg Paradowski</p>
                </div>
            </div>
            <SecondaryFooter />
        </Layout>
    )
}