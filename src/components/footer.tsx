import Link from "next/link";
import { lexend_deca } from "@/utils/fonts";
import InstagramLogo from "../public/intagram_logo.svg"
import TwitterLogo from "../public/twitter_logo.svg"
import LinkedInLogo from "../public/linkedin_logo.svg"


export default function Footer() {

    return (
        <div className="flex flex-col mt-auto items-center py-20 gap-6">
            <ul className="flex gap-8">
                <InstagramLogo height={35} width={35} fill='white' background='black' />
                <TwitterLogo height={35} width={35} fill='white' background='black' />
                <LinkedInLogo height={35} width={35} fill='white' background='black' />
            </ul>
            <p className={`py-2 text-base font-lexend ${lexend_deca.variable}`}>
                Made with ❤️ by <Link href='https://github.com/heraldjose10/' className="underline">@heraldjos10</Link>
            </p>
        </div>
    )
}