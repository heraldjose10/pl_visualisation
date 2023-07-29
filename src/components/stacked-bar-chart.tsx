'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

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

	const windowWidth = window.innerWidth
	
	width ? '' : width = 700
	return (
		<div className="flex flex-col items-center mb-10 md:w-[60%] w-full mx-auto">
			<h2 className='text-black text-xl md:text-[24px]'>
				{plotTitle}
			</h2>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart
					data={data}
					className="my-5 self-center"
				>
					<XAxis
						dataKey="name"
						angle={windowWidth <= 900 ? 270 : 0}
						fontSize={windowWidth <= 900 ? 12 : 16}
						interval={0}
					/>
					<YAxis domain={yRange}
						fontSize={14}
					/>
					<Tooltip />
					<Legend margin={{top:40}} />
					<Bar name="away goals" dataKey={AwayData} stackId="a" fill="#315c3c" />
					<Bar name="home goals" dataKey={HomeData} stackId="a" fill="#48d46d" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}
