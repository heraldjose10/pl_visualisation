'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { Team } from "@/types"


interface StackedBarChartProps {
	data: Team[]
}

export default function StackedBarChart({data}:StackedBarChartProps) {

	return (
		<BarChart width={700} height={400} data={data} barCategoryGap={30} className="my-5 self-center">
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip/>
			<Legend/>
			<Bar name="away goals" dataKey="away_goals" stackId="a" fill="#315c3c" />
			<Bar name="home goals" dataKey="home_goals" stackId="a" fill="#48d46d" />
		</BarChart>
	)
}
