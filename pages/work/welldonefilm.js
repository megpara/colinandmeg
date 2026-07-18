import Link from "next/link";
import Layout from "../../components/Layout";
import SecondaryFooter from "../../components/SecondaryFooter";

export default function WellDoneFilm() {
    return (
        <Layout>
            <div className="w-full h-[85%] md:h-[125%] flex items-center justify-center pt-[9rem]">
                <div className="w-full h-full pb-12 flex flex-col items-center justify-center">
                    <div className="w-full h-full relative">
                        <iframe src="https://player.vimeo.com/video/1018092084?h=dad703d479&autoplay=1&title=0&byline=0&portrait=0" className="absolute top-0 left-0 w-full h-full" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                    <p className="text-xs italic pt-8">
                    Well Done<br />
                    Directed by Colin Lupe & Meg Paradowski<br />
                    Concept and Choreography: Meg Paradowski<br />
                    Director of Photography: Colin Lupe<br />
                    Edit: Colin Lupe & Meg Paradowski<br />
                    Casting: Meg Paradowski<br />
                    Lighting: Colin Lupe<br />
                    Performers: Marco Palomino, Daphne Fernberger, Travis Lim<br />
                    Space: Reunion LA<br />
                    Producer: Halston Bruce<br />
                    Music: 3. Sequentia: Lacrimosa by Jacky Terrasson</p>
                </div>
            </div>
            <SecondaryFooter />
        </Layout>
    )
}