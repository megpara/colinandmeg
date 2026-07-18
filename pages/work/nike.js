import Link from "next/link";
import Layout from "../../components/Layout";
import SecondaryFooter from "../../components/SecondaryFooter";

export default function Nike() {
    return (
        <Layout>
            <div className="w-full h-full md:h-[200%] flex items-center justify-center pt-[9rem]">
                <div className="w-full h-full pb-12 flex flex-col items-center justify-center">
                    <div className="w-full h-full relative">
                        <iframe src="https://player.vimeo.com/video/885029706?h=dfad01627c&autoplay=1&title=0&byline=0&portrait=0" className="absolute top-0 left-0 w-full h-full" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                    <p className="text-xs italic py-8">
                    Nike: Run Your Run<br />
                    Directed by Colin Lupe<br />
                    Director of Photography: Colin Lupe<br />
                    Edit: Dustin Muechow<br /></p>
                    <div className="w-full h-full relative">
                        <iframe src="https://player.vimeo.com/video/885031053?h=5b90be273c&autoplay=0&title=0&byline=0&portrait=0" className="absolute top-0 left-0 w-full h-full" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
            <SecondaryFooter />
        </Layout>
    )
}