'use client'


import Image from "next/image";
import { usePathname } from 'next/navigation';
import { passion_one } from "@/utils/fonts";
import { headings, images } from '@/utils/hero';


export default function Hero({ children }: { children: React.ReactNode }) {

    const pathname:string = usePathname();

    return (
        <div
            className="md:h-[800px] h-[500px] bg-gradient-to-b from-black from-0% via-[rgba(0, 0, 0, 0.474)] via-5% to-[rgba(0, 0, 0, 0.048)] to-70%"
        >
            {/* apply background image to hero section */}
            <div className="absolute -z-10 w-screen h-[500px] md:h-[800px] opacity-80">
                <Image
                    className="max-h-full object-fill"
                    priority={true}
                    alt={images[pathname as keyof typeof images]['alt']}
                    src={images[pathname as keyof typeof images]['link']}
                    fill={true}
                    style={
                        { objectFit: "cover" }
                    }
                    quality={100}
                />
            </div>
            <div className="flex flex-col mx-8 md:mx-16 max-w-[1120px] lg:m-auto">
                {/* nav bar */}
                {children}
                <h1 className={`uppercase text-[52px] md:text-[80px] sm:text-[100px] ${passion_one.variable} font-passion w-full sm:w-[660px] md:mt-[100px] md:leading-[110px]`}>
                    {headings[pathname as keyof typeof headings]}
                </h1>
            </div>
        </div>
    )
}
