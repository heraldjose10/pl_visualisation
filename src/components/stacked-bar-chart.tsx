'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { Team } from "@/types"


interface StackedBarChartProps {
	data: Team[]
}

function HomeData(team:Team){
	console.log(team)
	return(
		team['goals_scored']['home']
	)
}

function AwayData(team:Team){
	return(
		team['goals_scored']['away']
	)
}

export default function StackedBarChart({data}:StackedBarChartProps) {

	return (
		<BarChart width={700} height={400} data={data} barCategoryGap={30} className="my-5 self-center">
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip/>
			<Legend/>
			<Bar name="away goals" dataKey={AwayData} stackId="a" fill="#315c3c" />
			<Bar name="home goals" dataKey={HomeData} stackId="a" fill="#48d46d" />
		</BarChart>
	)
}
