import Link from "next/link";
import Layout from "../../components/Layout";
import SecondaryFooter from "../../components/SecondaryFooter";

export default function Olipop() {
    return (
        <Layout>
            <div className="w-full h-[85%] md:h-full flex items-center justify-center pt-[9rem] px-8 md:px-[10rem]">
                <div className="w-full h-full pb-12 flex flex-col items-center justify-center">
                    <video loop playsInline controls src="/work/byheart.mp4" poster="/work/mandymoore.jpeg" className="w-full md:w-3/4" />
                    <p className="text-xs italic pt-8">
                    #MandyMoore | ByHeart<br />
                    Director of Photography: Colin Lupe<br /></p>
                </div>
            </div>
            <SecondaryFooter />
        </Layout>
    )
}