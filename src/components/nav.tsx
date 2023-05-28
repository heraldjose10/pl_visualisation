'use client'


import Link from "next/link";
import { usePathname } from 'next/navigation';
import { lexend_deca } from "@/utils/fonts";


export default function Nav() {

    const pathname:string = usePathname()

    return (
        <ul className={`flex gap-12 ${lexend_deca.variable} font-lexend my-20 [&>li]:py-1`}>
            <li className={pathname == '/' ? 'border-b-2 border-white' : ''}>
                <Link href='/'>Home</Link>
            </li>
            <li className={pathname == '/compare' ? 'border-b-2 border-white' : ''}>
                <Link href='/compare'>Team Compare</Link>
            </li>
            <li className={pathname == '/about' ? 'border-b-2 border-white' : ''}>
                <Link href='/about'>About</Link>
            </li>
        </ul>
    )
}