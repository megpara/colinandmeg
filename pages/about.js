import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import SecondaryFooter from "../components/SecondaryFooter";

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About</title>
                <meta
                name="description"
                content="Who We Are"
                />
            </Head>
                <div className="relative z-[-1]">
                    <div className="flex justify-between pt-48 px-4 md:px-8">
                        <div className="md:basis-1/2 text-3xl font-display font-bold">Hi, we're Colin & Meg — a husband and wife director duo based in LA. Together we direct, DP, edit, light, cast, and choreograph.</div>
                    </div>
                    <div className="block md:flex justify-between pt-12 md:pt-[24vh] pb-[12vh] px-4 md:px-8">
                        <Image src="/biopic.JPG" alt="Colin Lupe and Megan Paradowski" className="basis-1/2 max-w-full md:max-w-[400px] w-full object-cover pb-12" width={400} height={300} priority />
                        <div className="basis-1/2 text-[#bab5b1] text-sm text-justify italic">
                            <strong className="font-bold">Colin Lupe</strong> is a creator, director, DP, cinematographer, and editor based in Los Angeles. Colin is best known for his work on Thank You, Goodnight: The Bon Jovi Story (2024), BS High (2023), and Two Distant Strangers (2020). He is honored to have received Emmy and Oscar awards for his work on Olympic campaign #StrongerTogether and Two Distant Strangers, respectively. Colin has worked with brands and artists such as Bon Jovi, Lizzo, Nike, Olipop, Meta, Naked Cashmere, and others.
                            <br />
                            <br />
                            <strong className="font-bold">Megan Paradowski</strong> is a Los Angeles based contemporary dance choreographer who creates immersive, site-specific performances and dance films, often collaborating with artists of other mediums. She is the founder and director of Empara, a movement and choreography company focused on creating nontraditional contemporary dance experiences.
                            <br />
                            <br />
                            Together, Megan and Colin work to merge the fluidity of dance with the artistry of film. Their shared vision and innovative spirit continue to push the boundaries of how movement and visual media can intertwine to create compelling experiences.
                        </div>
                    </div>
                    <SecondaryFooter />
                </div>
        </Layout>
    )
}