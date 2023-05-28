import Link from "next/link";
import { lexend_deca } from "@/utils/fonts";


export default function Nav() {
    return (
        <ul className={`flex gap-12 ${lexend_deca.variable} font-lexend my-20 [&>li]:cursor-pointer`}>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/compare'>Team Compare</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
        </ul>
    )
}