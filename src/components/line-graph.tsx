'use client'


import { LineGraphData } from '@/types'
import { teamColors } from '@/utils/team_colors'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts'

interface LineGraphProps {
    data: LineGraphData[],
    plotTitle: string
}

export default function LineGraph({ data, plotTitle }: LineGraphProps) {

    const width: number = 900

    return (
        <div className='flex flex-col items-center md:w-[70%] w-full mx-auto'>
            <h2 className='text-black text-xl md:text-[24px]'>
                {plotTitle}
            </h2>
            <div className='flex flex-col md:flex-row'>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data} className='my-5 self-center'>
                        <XAxis dataKey="match" type="number"  >
                            <Label value="Number of Matches Played" offset={0} position="insideBottom" />
                        </XAxis>

                        <YAxis dataKey="value">
                            <Label value="Goal Difference" position="center" angle={270} />
                        </YAxis>

                        <Tooltip />

                        {/* <Legend layout='vertical' verticalAlign='middle' align='right' />  */}
                        {/* <Legend layout="vertical" verticalAlign="bottom" align="center" />  */}
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
                </ResponsiveContainer>
                <ul>
                    {
                        data.map(d=>(
                            <li>
                                {d.name}
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}