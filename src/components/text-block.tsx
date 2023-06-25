'use client'
import { overpass } from "@/utils/fonts";

interface TextBlockProps {
    heading: string,
    children: React.ReactNode
}

export default function TextBlock({ heading, children }: TextBlockProps) {
    return (
        <section className="max-w-[1120px] w-[80vw] mx-auto flex flex-col">
            <h1 className={`${overpass.variable} font-overpass text-[40px] text-headings-500 mb-5`}>
                {heading}
            </h1>
            {
                children
            }
        </section>
    )
}