import { useEffect, useState } from "react"
import Image from 'next/image';
import { motion } from 'framer-motion'
import axios, { AxiosResponse } from 'axios';
import { TeamLogos } from "@/types";


type ChooseTeamProps = {
    setIsOpen: (isOpen: number) => void,
    setTeam: (team: TeamLogos) => void
}

export default function ChooseTeam({ setIsOpen, setTeam }: ChooseTeamProps) {

    const [teams, setTeams] = useState<TeamLogos[]>([])

    useEffect(() => {
        async function getTeams() {
            try {
                const response: AxiosResponse = await axios.get('/api/teams')
                setTeams(response.data);
            } catch (error) {
                console.log(error)
            }
        }

        getTeams()
    }, [])

    return (
        <motion.div
            className="flex flex-col text-black"
        >
            {
                teams.length > 0
                    ? <motion.ul
                        initial={{ scale: .4 }}
                        animate={{ scale: 1 }}
                        transition={{
                            ease: "easeInOut",
                            duration: .6,
                        }}
                        className="flex gap-10 flex-wrap justify-between max-w-2xl"
                    >
                        {
                            teams.map(team => (
                                <li
                                    onClick={() => {
                                        setTeam(team)
                                        setIsOpen(0)
                                    }}
                                >
                                    <Image
                                        className="shadow-[2px_5px_12px_6px_rgba(0,0,0,0.3)] cursor-pointer rounded-xl hover:scale-110 transition-all ease-in-out"
                                        alt={team.name + ' logo'}
                                        src={team.logo}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                    />
                                </li>
                            ))
                        }
                    </motion.ul>
                    // show a spinner if teams are loading
                    : <p>loading...</p>
            }
        </motion.div>
    )
}