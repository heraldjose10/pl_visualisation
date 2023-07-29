'use client'


import { LineGraphData } from '@/types'
import { teamColors } from '@/utils/team_colors'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts'

interface LineGraphProps {
    data: LineGraphData[],
    plotTitle: string,
    yLabel: string
}

export default function LineGraph({ data, plotTitle, yLabel }: LineGraphProps) {

    const windowWidth = window.innerWidth

    return (
        <div className='flex flex-col items-center md:w-[70%] w-full mx-auto'>
            <h2 className='text-black text-xl md:text-[24px] text-center'>
                {plotTitle}
            </h2>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data} className='my-5 self-center'>
                    <XAxis dataKey="match" type="number"  >
                        <Label
                            value="Number of Matches Played"
                            offset={0}
                            position="insideBottom"
                            fontSize={windowWidth < 500 ? 14 : 16}
                        />
                    </XAxis>

                    <YAxis dataKey="value">
                        <Label value={yLabel} position="center" angle={270} />
                    </YAxis>

                    <Tooltip />

                    {
                        // change legend for devices with small window width
                        windowWidth >= 900
                            ? <Legend layout='vertical' verticalAlign='middle' align='right' />
                            // :''
                            : <Legend layout='horizontal' verticalAlign='bottom' />
                    }

                    {
                        data.map((d) => (
                            <Line
                                dataKey="value"
                                data={d.data}
                                name={d.name}
                                key={d.name}
                                stroke={teamColors[d.name as keyof typeof teamColors]}
                                dot={windowWidth <= 900 ? false : true}
                            />
                        ))
                    }
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}