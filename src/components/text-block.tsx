'use client'
import { Suspense, useEffect, useState } from "react";
import { overpass } from "@/utils/fonts";

interface TextBlockProps {
    heading: string,
    texts: string[],
    graph?: React.ReactNode
}

export default function TextBlock({ heading, texts, graph }: TextBlockProps) {


    const [domLoaded, setDomLoaded] = useState(false)

    useEffect(() => {
        setDomLoaded(true)
    }, [])

    return (
        <section className="max-w-[1120px] w-[80vw] mx-auto flex flex-col">
            <h1 className={`${overpass.variable} font-overpass text-[40px] text-headings-500 mb-5`}>
                {heading}
            </h1>
            {
                texts.map((text, index) => (
                    <p key={index} className="text-black mb-4">
                        {text}
                    </p>
                ))
            }
            {
                // load the graph only after DOM is rendered
                domLoaded && graph ? graph : <p>Loading Graph....</p>
            }
        </section>
    )
}