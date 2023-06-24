import type { Document } from 'mongodb';
import { connectToDatabase } from '../lib/mongodb'

import { GoalDifferenceData, Team } from '@/types';
import { teamColors } from '@/utils/team_colors';

import TextBlock from '@/components/text-block';
import StackedBarChart from '@/components/stacked-bar-chart';
import LineGraph from '@/components/line-graph';


async function getGoals() {
	try {
		const client = await connectToDatabase();
		const db = client.db("premier_league_2023");

		// get goals data
		const teamDocs: Document[] = await db
			.collection("teams")
			.find({ "name": { "$in": Object.keys(teamColors) } })
			.project({ "name": 1, "goals_scored": 1, "goals_conceded": 1, "_id": 0 })
			.toArray()

		const teams: Team[] = teamDocs.map((document: Document) => ({
			name: document.name,
			goals_scored: document.goals_scored,
			goals_conceded: document.goals_conceded
		}))

		return (teams)

	} catch (e) {
		console.error(e)
		return (String(e))
	}
}


async function getGoalDiffernce() {
	try {
		const client = await connectToDatabase();
		const db = client.db("premier_league_2023")

		// get goal difference data of pl big six
		const goalDiffDocs: Document[] = await db
			.collection("teams")
			.find({ "name": { "$in": Object.keys(teamColors) } })
			.project({ "name": 1, "goal_diff": 1, "_id": 0 })
			.toArray()

		const goalDiff: GoalDifferenceData[] = goalDiffDocs.map((document: Document) => {
			return ({
				name: document.name,
				data: document.goal_diff.map((gd: number, index: number) => ({
					match: index + 1,
					goal_diff: gd
				}))
			})
		})
		return goalDiff

	} catch (e) {
		console.error(e)
		return String(e)
	}
}

export default async function Home() {

	const data = await getGoals()

	const goalDiff = await getGoalDiffernce()

	return (
		<main className='bg-white py-[200px] flex flex-col gap-16'>
			<TextBlock
				heading='Introduction'
				texts={
					[
						'The English Premier League concluded at the end of May, with Manchester City winning the race for the fourth time in the last five years. Although Arsenal made it seem like a tough fight, with their unmatched squad dept, the Blues could easily win the league by the end of the season. They might even show the same level of competence at the Champions League and secure themselves a treble. Here, I will be working with the match results of the 2023 Premier League season and analysing various factors that contribute to the outcome of the League, including goals, goal differences, and yellow and red cards.',
					]
				}
			/>
			<TextBlock
				heading='Goals & Goal Differences'
				texts={
					[
						'Let\'s begin by examining the goal-scoring performance, defensive strength, and overall goal differences for each team in the Premier League during the 2023 season. The table toppers Manchester City has showcased their attacking prowess by scoring an impressive 94 goals. Arsenal is not far behind with 88 goals to their name, highlighting their strong offensive capabilities as well.',
						'Both Manchester City and Newcastle United FC have displayed outstanding defensive performances in the Premier League, conceding an impressive average of only 0.87 goals per match. Throughout the 38-game season, they managed to concede only 33 goals. It can be noted that, even though Liverpool could score more goals than Manchester United, they couldn\'t get into top four as their defence conceded a lot of goals throughout the season. Let\'s hope Scoucers can secure their Champions League spot next season.',
						'Of the big six teams in Premier League, Chelsea had an aweful season. They finished the campaign with  a goal difference of negetive nine. As expected, Manchester City and Arsenal concluded their campaign with a goal difference of 61 and 45 respectively.'
					]
				}
				// TODO: fix the layout change issue on render
				graph={typeof data !== "string" ? <StackedBarChart data={data as Team[]} /> : ''}
			/>
			<TextBlock
				heading='Team Movements'
				texts={
					[
						'In this section, let\'s skim through the movement of the Premier League Big Six after each match. Arsenal had a superb start to their season. They could hold on to the first throughout most of the season. But, they had to surrender that spot to Manchester City at the end of the season. We can also see a very inconsistent performance from Liverpool. Manchester United had a lousy start to their campaign, but they could get back to form and finish in the top four by the end of the season.'
					]
				}
				graph={typeof goalDiff !== "string" ? <LineGraph data={goalDiff as GoalDifferenceData[]} /> : ''}
			/>
			<TextBlock
				heading='Conclusion'
				texts={
					[
						'In conclusion, the 2023 Premier League season was a thrilling and competitive campaign that saw Manchester City emerge as the champions. Congratulations to Manchester City on their well-deserved title, and we eagerly await the next season to see how the teams evolve and compete for glory once again.',
						'We could use pandas and matplotlib to visualize and analyze the match results of the Premier League 2023 season. I will try to create a website for making details comparisons of teams using NextJS and Recharts. Thanks for reading to the end and all sorts of feedback are appreciated!'
					]
				}
			/>
		</main>
	)
}
