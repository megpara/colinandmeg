import Link from "next/link";

export default function SecondaryFooter() {
    return (
        <div className="flex justify-between items-end text-[8px] md:text-[10px] lowercase text-[#131313] bg-[#f2ede2] font-medium px-8 py-16">
            <div className="flex flex-col gap-4 uppercase">
                <div className="flex gap-4">
                    <a href="https://vimeo.com/user260843608" target="_blank">Vimeo</a>
                    <a href="https://www.instagram.com/colin_and_meg" target="_blank">Ig</a>
                </div>
                <a href="mailto:colinandmeg@colinandmeg.direct">colinandmeg@colinandmeg.direct</a>
            </div>
            <div className="flex flex-col gap-4 uppercase">
                <div className="flex gap-4">
                    <Link href={"/work"}>Work</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/contact"}>Contact</Link>
                </div>
                <div>
                &copy; 2026 all rights reserved
                </div>
            </div>
        </div>
    )
}
