'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import ChooseTeam from '@/components/choose-team';
import StackedBarChart from '@/components/stacked-bar-chart';
import LineGraph from '@/components/line-graph';

import { Goals, TeamComplete, TeamLogos } from '@/types';


async function getTeam(name: string, setTeamData: (teamData: TeamComplete) => void) {
    // request details of the team and set the state with the response data
    try {
        const teamName: string = name.split(' ').join('_')
        const response: AxiosResponse = await axios.get('/api/teams/' + teamName)
        setTeamData(response.data);

    } catch (error) {
        console.log(error)
    }
}

function prepDataForGoals(
    teamOneData: TeamComplete,
    teamTwoData: TeamComplete,
    type: "goals_scored" | "goals_conceded"
): Goals[] {
    const data: Goals[] = []
    data.push({
        name: teamOneData.name,
        home: teamOneData[type].home,
        away: teamOneData[type].away
    })
    data.push({
        name: teamTwoData.name,
        home: teamTwoData[type].home,
        away: teamTwoData[type].away
    })
    return data
}

export default function Plot() {

    const [teamSelect, setTeamSelect] = useState<number>(0)

    const [teamOne, setTeamOne] = useState<TeamLogos | null>(null)
    const [teamTwo, setTeamTwo] = useState<TeamLogos | null>(null)

    const [teamOneData, setTeamOneData] = useState<TeamComplete | null>(null)
    const [teamTwoData, setTeamTwoData] = useState<TeamComplete | null>(null)

    // get details of team one
    useEffect(() => {
        if (teamOne) {
            getTeam(teamOne.name, setTeamOneData)
        }
    }, [teamOne])

    // get details of team two
    useEffect(() => {
        if (teamTwo) {
            getTeam(teamTwo.name, setTeamTwoData)
        }
    }, [teamTwo])

    return (
        <main className='bg-white py-[200px]'>

            <div className='flex max-w-[80vw] md:max-w-[1120px] mx-auto gap-5 justify-around'>
                {
                    teamSelect === 0
                        ? <>
                            <Image
                                className='w-[150px] h-[150px] md:w-[300px] md:h-[300px] shadow-[2px_5px_12px_6px_rgba(0,0,0,0.3)] cursor-pointer rounded-xl hover:scale-110 transition-all ease-in-out object-cover'
                                src={teamOne ? teamOne.logo : '/PL-Lion.png'}
                                alt={teamOne ? `${teamOne.name} logo` : 'premier league logo'}
                                width={0}
                                height={0}
                                sizes="100vw"
                                onClick={() => {
                                    setTeamSelect(1)
                                }}
                            />
                            <Image
                                className='w-[150px] h-[150px] md:w-[300px] md:h-[300px] shadow-[2px_5px_12px_6px_rgba(0,0,0,0.3)] cursor-pointer rounded-xl hover:scale-110 transition-all ease-in-out object-cover'
                                src={teamTwo ? teamTwo.logo : '/PL-Lion.png'}
                                alt={teamTwo ? `${teamTwo.name} logo` : 'premier league logo'}
                                width={0}
                                height={0}
                                sizes="100vw"
                                onClick={() => {
                                    setTeamSelect(2)
                                }}
                            />
                        </>
                        : ''
                }
                {
                    teamSelect === 1 ? <ChooseTeam setIsOpen={setTeamSelect} setTeam={setTeamOne} /> : ''
                }
                {
                    teamSelect === 2 ? <ChooseTeam setIsOpen={setTeamSelect} setTeam={setTeamTwo} /> : ''
                }

            </div>

            {
                // show the comparison if two teams are selected
                (teamOneData && teamTwoData && teamSelect === 0)
                    ? <>
                        <div className='flex flex-col md:flex-row max-w-[80vw] md:max-w-[1120px] gap-8 justify-center md:px-10 mx-auto mt-[150px]'>
                            <div className='p-5 shadow-[2px_5px_12px_6px_rgba(0,0,0,0.3)] rounded-xl flex-grow'>
                                <StackedBarChart
                                    data={prepDataForGoals(teamOneData, teamTwoData, "goals_scored")}
                                    plotTitle='Goals Scored'
                                    yRange={[0, 100]}
                                    width={400}
                                />
                            </div>
                            <div className='p-5 shadow-[2px_5px_12px_6px_rgba(0,0,0,0.3)] rounded-xl flex-grow'>
                                <StackedBarChart
                                    data={prepDataForGoals(teamOneData, teamTwoData, "goals_conceded")}
                                    plotTitle='Goals Conceded'
                                    yRange={[0, 100]}
                                    width={400}
                                />
                            </div>
                        </div>
                        <div className='max-w-[1120px] mx-auto mt-[150px] flex justify-center md:px-10'>
                            <div className='p-5 shadow-[2px_5px_12px_6px_rgba(0,0,0,0.3)] rounded-xl flex-grow max-w-[80vw]'>
                                <LineGraph
                                    data={[
                                        { name: teamOneData.name, data: teamOneData.goal_diff.map((gd, index) => ({ match: index + 1, value: gd })) },
                                        { name: teamTwoData.name, data: teamTwoData.goal_diff.map((gd, index) => ({ match: index + 1, value: gd })) }
                                    ]}
                                    plotTitle='Goal Difference'
                                    yLabel='Goal difference'
                                />
                            </div>
                        </div>
                        <div className='md:max-w-[1120px] mx-auto mt-[150px] flex justify-center md:px-10'>
                            <div className='p-5 shadow-[2px_5px_12px_6px_rgba(0,0,0,0.3)] rounded-xl flex-grow max-w-[80vw]'>
                                <LineGraph
                                    data={[
                                        { name: teamOneData.name, data: teamOneData.standings.map((gd, index) => ({ match: index + 1, value: gd })) },
                                        { name: teamTwoData.name, data: teamTwoData.standings.map((gd, index) => ({ match: index + 1, value: gd })) }
                                    ]}
                                    plotTitle='Team Standings'
                                    yLabel='Team standing'
                                />
                            </div>
                        </div>
                    </>
                    : ''
            }
        </main>
    )
}