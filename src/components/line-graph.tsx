'use client'


import { LineGraphData } from '@/types'
import { teamColors } from '@/utils/team_colors'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts'

interface LineGraphProps {
    data: LineGraphData[],
    plotTitle: string
}

export default function LineGraph({ data, plotTitle }: LineGraphProps) {

    const width: number = 900

    return (
        <LineChart width={width} height={400} data={data} className='my-5 self-center'>
            <text x={width / 2} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
                <tspan fontSize="24">{plotTitle}</tspan>
            </text>

            <XAxis dataKey="match" type="number"  >
                <Label value="Number of Matches Played" offset={0} position="insideBottom" />
            </XAxis>

            <YAxis dataKey="value">
                <Label value="Goal Difference" position="center" angle={270} />
            </YAxis>

            <Tooltip />

            <Legend layout='vertical' verticalAlign='middle' align='right' />
            {
                data.map((d) => (
                    <Line
                        dataKey="value"
                        data={d.data}
                        name={d.name}
                        key={d.name}
                        stroke={teamColors[d.name as keyof typeof teamColors]}
                    />
                ))
            }
        </LineChart>
    )
}