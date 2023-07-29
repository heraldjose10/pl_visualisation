'use client'

import { Goals, LineGraphData, Team } from '@/types';

import TextBlock from '@/components/text-block';
import StackedBarChart from '@/components/stacked-bar-chart';
import LineGraph from '@/components/line-graph';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import CircleLoader from '@/components/circle-loader';


async function getTeams(setData: (teamData: Team[]) => void) {
	try {
		const response: AxiosResponse = await axios.get('/api/bigsix')
		setData(response.data)
	} catch (error) {
		console.log(error)
	}
}


async function getGoalDiffernce(setGoalDiff: (goalDiffData: LineGraphData[]) => void) {
	try {
		const response: AxiosResponse = await axios.get('/api/bigsix/goaldifference')
		setGoalDiff(response.data)
	} catch (error) {
		console.log(error)
	}
}

export default function Home() {

	const [data, setData] = useState<Team[] | null>(null)
	const [goalDiff, setGoalDiff] = useState<LineGraphData[] | null>(null)

	useEffect(() => {
		getTeams(setData)
	}, [])

	useEffect(() => {
		getGoalDiffernce(setGoalDiff)
	}, [])

	// create goals scored data
	let goalsScoredData: Goals[] | null = null
	if (data) {
		goalsScoredData = data.map((team: Team) => {
			return ({
				name: team.name,
				home: team.goals_scored.home,
				away: team.goals_scored.away
			})
		})
	}

	// create goals conceded data
	let goalsConcededData: Goals[] | null = null
	if (data) {
		goalsConcededData = data.map((team: Team) => {
			return ({
				name: team.name,
				home: team.goals_conceded.home,
				away: team.goals_conceded.away
			})
		})
	}

	// create standings data
	let standings: LineGraphData[] | null = null
	if (data) {
		standings = data.map((team: Team) => {
			return ({
				name: team.name,
				data: team.standings.map((standing: number, index: number) => ({
					match: index + 1,
					value: standing
				}))
			})
		})
	}

	return (
		<main className='bg-white py-[100px] md:py-[200px] flex flex-col gap-10 md:gap-16'>

			<TextBlock heading='Introduction'>
				<p className='text-black mb-4 text-base md:text-lg'>
					The English Premier League concluded at the end of May, with Manchester City winning the race
					for the fourth time in the last five years. Although Arsenal made it seem like a tough fight,
					with their unmatched squad dept, the Blues could easily win the league by the end of the season.
					They might even show the same level of competence at the Champions League and secure themselves
					a treble. Here, I will be working with the match results of the 2023 Premier League season and
					analysing various factors that contribute to the outcome of the League, including goals, goal
					differences, and yellow and red cards.
				</p>
			</TextBlock>

			<TextBlock heading='Goals & Goal Differences'>
				<p className='text-black mb-4 text-base md:text-lg'>
					Let&apos;s begin by examining the goal-scoring performance, defensive strength, and overall goal
					differences for each team in the Premier League during the 2023 season. The table toppers
					Manchester City has showcased their attacking prowess by scoring an impressive 94 goals. Arsenal
					is not far behind with 88 goals to their name, highlighting their strong offensive capabilities as
					well.
				</p>
				{
					goalsScoredData
						? <StackedBarChart data={goalsScoredData as Goals[]} plotTitle='Goals Scored' yRange={[0, 120]} />
						: <CircleLoader />
				}
				<p className='text-black mb-4 text-base md:text-lg'>
					Both Manchester City and Newcastle United FC have displayed outstanding defensive performances in
					the Premier League, conceding an impressive average of only 0.87 goals per match. Throughout the
					38-game season, they managed to concede only 33 goals. It can be noted that, even though Liverpool
					could score more goals than Manchester United, they couldn&apos;t get into top four as their defence conceded
					a lot of goals throughout the season. Let&apos;s hope Scoucers can secure their Champions League spot next
					season.
				</p>
				{
					goalsConcededData
						? <StackedBarChart data={goalsConcededData as Goals[]} plotTitle='Goals Conceded' yRange={[0, 80]} />
						: <CircleLoader />
				}
				<p className='text-black mb-4 text-base md:text-lg'>
					Of the big six teams in Premier League, Chelsea had an aweful season. They finished the campaign
					with  a goal difference of negetive nine. As expected, Manchester City and Arsenal concluded their
					campaign with a goal difference of 61 and 45 respectively.
				</p>
				{
					goalDiff
						? <LineGraph data={goalDiff as LineGraphData[]} plotTitle='Goal Difference of PL big Six' yLabel='Goal difference' />
						: <CircleLoader />
				}
			</TextBlock>

			<TextBlock heading='Team Movements'>
				<p className='text-black mb-4 text-base md:text-lg'>
					In this section, let&apos;s skim through the movement of the Premier League Big Six after each match.
					Arsenal had a superb start to their season. They could hold on to the first throughout most of the
					season. But, they had to surrender that spot to Manchester City at the end of the season. We can
					also see a very inconsistent performance from Liverpool. Manchester United had a lousy start to
					their campaign, but they could get back to form and finish in the top four by the end of the season.
				</p>
				{
					standings
						? <LineGraph data={standings as LineGraphData[]} plotTitle='Team Movements of PL big Six' yLabel='Team standing' />
						: <CircleLoader />
				}
			</TextBlock>

			<TextBlock heading='Conclusion'>
				<p className='text-black mb-4 text-base md:text-lg'>
					In conclusion, the 2023 Premier League season was a thrilling and competitive campaign that saw
					Manchester City emerge as the champions. Congratulations to Manchester City on their well-deserved
					title, and we eagerly await the next season to see how the teams evolve and compete for glory once again.
				</p>
				<p className='text-black mb-4 text-base md:text-lg'>
					We could use pandas and matplotlib to visualize and analyze the match results of the Premier League
					2023 season. I will try to create a website for making details comparisons of teams using NextJS
					and Recharts. Thanks for reading to the end and all sorts of feedback are appreciated!
				</p>
			</TextBlock>
		</main>
	)
}
