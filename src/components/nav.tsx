'use client'


import Link from "next/link";
import { usePathname } from 'next/navigation';
import { lexend_deca } from "@/utils/fonts";
import { LayoutGroup, motion } from "framer-motion";


export default function Nav() {

    const pathname: string = usePathname()

    return (
        <LayoutGroup>
            <motion.ul
                className={`flex justify-between sm:justify-normal gap-8 sm:gap-12 ${lexend_deca.variable} font-lexend font-bold my-20 [&>li]:py-1 text-sm sm:text-base`}
                layout={true}
            >
                <motion.li className="relative">
                    {
                        pathname == '/'
                            ? <motion.div
                                className="absolute bottom-[-4px] w-full h-1 rounded-xl bg-white"
                                layoutId="underline"
                            />
                            : ''
                    }
                    <Link href='/'>Home</Link>
                </motion.li>
                <motion.li className="relative">
                    {
                        pathname == '/compare'
                            ? <motion.div
                                className="absolute bottom-[-4px] w-full h-1 rounded-xl bg-white"
                                layoutId="underline"
                            />
                            : ''
                    }
                    <Link href='/compare'>Team Compare</Link>
                </motion.li>
                <motion.li className="relative">
                    {
                        pathname == '/about'
                            ? <motion.div
                                className="absolute bottom-[-4px] w-full h-1 rounded-xl bg-white"
                                layoutId="underline"
                            />
                            : ''
                    }
                    <Link href='/about'>About</Link>
                </motion.li>
            </motion.ul>
        </LayoutGroup>
    )
}