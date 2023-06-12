'use client'


import { GoalDifferenceData } from '@/types'
import { teamColors } from '@/utils/team_colors'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'

interface LineGraphProps {
    data: GoalDifferenceData[]
}

export default function LineGraph({ data }: LineGraphProps) {

    return (
        <LineChart width={700} height={400} data={data} className='my-5 self-center'>
            <XAxis dataKey="match" type="number" />
            <YAxis dataKey="goal_diff" />
            <Tooltip />
            <Legend layout='vertical' verticalAlign='middle' align='right' />
            {
                data.map((d) => (
                    <Line
                        dataKey="goal_diff"
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