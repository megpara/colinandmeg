import Layout from "../components/Layout";
import SecondaryFooter from "../components/SecondaryFooter";

export default function Home() {
    return (
        <Layout>
            <div className="w-screen h-screen relative">
            <video loop autoPlay muted playsInline className="absolute w-screen h-screen top-0 left-0 object-cover" src="/work/directorreel.mp4" poster="/work/bluemoon.jpg" />
            <div className="absolute bottom-32 md:bottom-16 w-full h-[12vh] flex items-end text-[8px] md:text-[10px] tracking-widest px-4 md:px-8">
                <div className="basis-1/3">
                    <div className="max-w-[75px] md:max-w-[150px] uppercase">
                    LA-Based director duo
                    </div>
                </div>
                <div className="basis-1/3 flex flex-col items-center uppercase">
                    <div className="max-w-[75px] md:max-w-[100px]">
                        colinandmeg@colinandmeg.direct
                    </div>
                </div>
                <div className="basis-1/3" />
            </div>
            </div>
            <SecondaryFooter />
        </Layout>
    )
}