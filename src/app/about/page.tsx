import TextBlock from "@/components/text-block";

export default function AboutPage() {
    return (
        <main className="bg-white py-[200px] flex flex-col gap-16">
            <TextBlock
                heading="Dataset"
                texts={
                    [
                        'Sed id est non augue sodales rhoncus id vitae tortor. Pellentesque id urna mattis libero consectetur vulputate posuere vitae nisl. Vivamus condimentum mattis turpis, ut dignissim nunc sagittis quis. Proin non odio nibh. Cras placerat nisi eget eleifend iaculis. Donec id varius elit, sed commodo dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis venenatis magna eget dolor consequat, eu suscipit ante aliquam. Proin magna odio, semper id dapibus sit amet, euismod eu mi. Vivamus eu ex nec purus interdum accumsan. Phasellus pretium libero eget purus bibendum, nec rhoncus risus ultricies.'
                    ]
                }
            />
            <TextBlock
                heading="Tech Stack/Libraries"
                texts={
                    [
                        'Sed id est non augue sodales rhoncus id vitae tortor. Pellentesque id urna mattis libero consectetur vulputate posuere vitae nisl. Vivamus condimentum mattis turpis, ut dignissim nunc sagittis quis. Proin non odio nibh. Cras placerat nisi eget eleifend iaculis. Donec id varius elit, sed commodo dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis venenatis magna eget dolor consequat, eu suscipit ante aliquam. Proin magna odio, semper id dapibus sit amet, euismod eu mi. Vivamus eu ex nec purus interdum accumsan. Phasellus pretium libero eget purus bibendum, nec rhoncus risus ultricies.',
                        'nis dis parturient montes, nascetur ridiculus mus. Duis venenatis magna eget dolor consequat, eu suscipit ante aliquam. Proin magna odio, semper id dapibus sit amet, euismod eu mi. Vivamus eu ex nec purus interdum accumsan. Phasellus pretium libero eget purus bibendum, nec rhoncus risus ultricies.'
                    ]
                }
            />
            <TextBlock
                heading="About Me"
                texts={
                    [
                        'Sed id est non augue sodales rhoncus id vitae tortor. Pellentesque id urna mattis libero consectetur vulputate posuere vitae nisl. Vivamus condimentum mattis turpis, ut dignissim nunc sagittis quis. Proin non odio nibh. Cras placerat nisi eget eleifend iaculis. Donec id varius elit, sed commodo dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis venenatis magna eget dolor consequat, eu suscipit ante aliquam. Proin magna odio, semper id dapibus sit amet, euismod eu mi. Vivamus eu ex nec purus interdum accumsan. Phasellus pretium libero eget purus bibendum, nec rhoncus risus ultricies.',
                    ]
                }
            />
        </main>
    )
}