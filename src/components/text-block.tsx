import { overpass } from "@/utils/fonts";

interface TextBlockProps {
    heading: string,
    texts: string[]
}

export default function TextBlock({ heading, texts }: TextBlockProps) {

    return (
        <section className="max-w-[1120px] w-[80vw] mx-auto">
            <h1 className={`${overpass.variable} font-overpass text-[40px] text-headings-500 mb-5`}>
                {heading}
            </h1>
            {
                texts.map(text => (
                    <p className="text-black mb-4">
                        {text}
                    </p>
                ))
            }
        </section>
    )
}