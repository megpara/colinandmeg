import Head from "next/head";
import Layout from "../components/Layout";
import SecondaryFooter from "../components/SecondaryFooter";

export default function Contact() {
    return(
        <Layout>
            <Head>
                <title>Contact</title>
                <meta
                name="description"
                content="Reach out at colinandmeg@colinandmeg.direct"
                />
            </Head>
            <div className="relative w-full h-full flex flex-col justify-between">
                <div className="h-full flex flex-col justify-center pt-20">
                    <div className="text-white flex flex-col md:flex-row justify-between px-4 md:px-8">
                        <div className="basis-1/2 font-display text-4xl tracking-widest pb-8 md:pb-0"><img src="/sayhello.png" className="h-[60px]"/></div>
                        <div className="basis-1/2 italic text-[#bab5b1] text-sm">
                        We'd love to hear from you at <a href="mailto:colinandmeg@colinandmeg.direct" className="underline">colinandmeg@colinandmeg.direct</a>.
                        <br />
                        <br />
                        Follow us on <a href="https://www.instagram.com/colin_and_meg" className="underline">IG</a>, <a href="https://vimeo.com/user260843608" className="underline">Vimeo</a>, and <a href="https://www.youtube.com/@colinandmeg.direct" className="underline">Youtube</a>.
                        </div>
                    </div>
                </div>
                <SecondaryFooter />
            </div>
            
        </Layout>
    )
}