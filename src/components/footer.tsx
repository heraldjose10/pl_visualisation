import Link from "next/link";
import { lexend_deca } from "@/utils/fonts";
import InstagramLogo from "../public/intagram_logo.svg"
import TwitterLogo from "../public/twitter_logo.svg"
import LinkedInLogo from "../public/linkedin_logo.svg"


export default function Footer() {

    return (
        <div className="flex flex-col mt-auto items-center py-20 gap-6 bg-black">
            <ul className="flex gap-8">
                <Link target="_blank" href="https://www.instagram.com/heraldjos/">
                    <InstagramLogo height={35} width={35} fill='white' background='black' />
                </Link>
                <Link target="_blank" href="https://twitter.com/heraldjose10">
                    <TwitterLogo height={35} width={35} fill='white' background='black' />
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/herald-olakkengil-5b47491b3/">
                    <LinkedInLogo height={35} width={35} fill='white' background='black' />
                </Link>
            </ul>
            <p className={`text-white md:py-2 text-sm md:text-base font-lexend ${lexend_deca.variable}`}>
                Made with ❤️ by <Link href='https://github.com/heraldjose10/' className="underline">@heraldjos10</Link>
            </p>
        </div>
    )
}