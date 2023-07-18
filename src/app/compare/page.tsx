'use client'

import Image from 'next/image';
import ChooseTeam from '@/components/choose-team';
import { useState } from 'react';
import { TeamLogos } from '@/types';


export default function Plot() {

    const [teamSelect, setTeamSelect] = useState<number>(0)
    const [teamOne, setTeamOne] = useState<TeamLogos | null>(null)
    const [teamTwo, setTeamTwo] = useState<TeamLogos | null>(null)

    return (
        <main className='bg-white py-[200px]'>

            <div className='flex max-w-[1120px] mx-auto gap-5 justify-around'>
                {
                    teamSelect === 0
                        ? <>
                            <Image
                                className='object-fill shadow-[2px_5px_12px_6px_rgba(0,0,0,0.3)] cursor-pointer rounded-xl hover:scale-110 transition-all ease-in-out'
                                src={teamOne ? teamOne.logo : '/PL-lion.png'}
                                alt={teamOne ? `${teamOne.name} logo` : 'premier league logo'}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                                onClick={() => {
                                    setTeamSelect(1)
                                }}
                            />
                            <Image
                                className='object-fill shadow-[2px_5px_12px_6px_rgba(0,0,0,0.3)] cursor-pointer rounded-xl hover:scale-110 transition-all ease-in-out'
                                src={teamTwo ? teamTwo.logo : '/PL-lion.png'}
                                alt={teamTwo ? `${teamTwo.name} logo` : 'premier league logo'}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '300px', height: '300px', objectFit: 'cover' }}
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
            {/* show the comparison if two teams are selected */}
            {
                    (teamOne && teamTwo)
                        ? <p >Both teams selected</p>
                        : ''
                }
        </main>
    )
}