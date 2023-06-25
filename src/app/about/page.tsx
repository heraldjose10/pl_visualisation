import TextBlock from "@/components/text-block";

export default function AboutPage() {
    return (
        <main className="bg-white py-[200px] flex flex-col gap-16">

            <TextBlock heading="Dataset">
                <p className="text-black mb-4 text-lg">
                    For this project, I used the&nbsp;
                    <a className="text-blue-500" target="_blank"
                    href="https://www.kaggle.com/datasets/evangower/premier-league-2022-2023?select=epl_results_2022-23.csv">
                    Premier League 2022-2023</a> dataset from Kaggle. The dataset contains match results of the 2022-2023 
                    season of the English Premier League for every team. Match data includes names of teams, referees, and stats by 
                    home and away side such as fouls, shots, cards, etc. It also includes a dataset of the club's info such as team 
                    colours, abbreviation, and team logo image.
                </p>
                <p className="text-black mb-4 text-lg">
                    Kudos to <a className="text-blue-500" target="_blank" href="https://www.kaggle.com/evangower">Evan Gower</a> for 
                    making the dataset and publishing it on Kaggle.
                </p>
            </TextBlock>

            <TextBlock heading="Tech Stack/Libraries">
                <p className="text-black mb-4 text-lg">
                    From my perspective, this project served as an experiment as I always wanted to use a JavaScript data visualization 
                    library. I decided to go with <a className="text-blue-500" target="_blank" href="https://recharts.org/en-US/">Recharts</a> 
                    &nbsp;for this project due to its simplicity, native SVG support, and its foundation on the renowned data visualization 
                    library, <a className="text-blue-500" target="_blank" href="https://d3js.org/">D3</a>. As of now, I find Recharts 
                    to be user-friendly for getting started; however, there are occasional frustrating issues that I have encountered. 
                    In my opinion, the documentation could have been better with more explanation.
                </p>
                <p className="text-black mb-4 text-lg">
                    In addition, I had my first experience using <a href="https://www.mongodb.com/" target="_blank" 
                    className="text-blue-500">MongoDB</a> with <a href="https://nextjs.org/" target="_blank" 
                    className="text-blue-500">Next.js</a>. Furthermore, the latest update to Next.js 13 brought significant improvements 
                    to the framework. The comprehensive documentation and strong community support for Next.js made it incredibly 
                    straightforward to incorporate into my project. I will use NextJs for my next project.
                </p>
            </TextBlock>

            <TextBlock heading="About Me">
                <p className="text-black mb-4 text-lg">
                    I am a software developer currently pursuing a Master of Science in Data Science at the University of Liverpool. 
                    I &lt;3 to code stuff.
                </p>
            </TextBlock>

        </main>
    )
}