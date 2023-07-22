'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"

import { Goals } from "@/types"


interface StackedBarChartProps {
	width?: number
	data: Goals[],
	plotTitle: string,
	yRange: number[]
}

function HomeData(team: Goals) {
	return (
		team['home']
	)
}

function AwayData(team: Goals) {
	return (
		team['away']
	)
}

export default function StackedBarChart({ data, plotTitle, yRange, width }: StackedBarChartProps) {
	width ? '' : width = 700
	return (
		<div className="flex flex-col items-center">
			<h2 className='text-black text-[24px]'>
                {plotTitle}
            </h2>
			<BarChart
				width={width}
				height={400}
				data={data}
				barCategoryGap={30}
				className="my-5 self-center"
			>
				<XAxis dataKey="name" />
				<YAxis domain={yRange} />
				<Tooltip />
				<Legend />
				<Bar name="away goals" dataKey={AwayData} stackId="a" fill="#315c3c" />
				<Bar name="home goals" dataKey={HomeData} stackId="a" fill="#48d46d" />
			</BarChart>
		</div>
	)
}
