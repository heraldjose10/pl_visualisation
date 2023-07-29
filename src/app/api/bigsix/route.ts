import { NextResponse } from "next/server";
import type { Document } from "mongodb";

import { connectToDatabase } from "@/lib/mongodb";
import { Team } from '@/types';
import { teamColors } from '@/utils/team_colors';


export async function GET() {
    // this function gets goals scored and conceded by the premier league big six
    const client = await connectToDatabase()
    const db = client.db("premier_league_2023")

    try {
        const bigSixGoalsDocs: Document[] = await db
            .collection("teams")
            .find({ "name": { "$in": Object.keys(teamColors) } })
            .project({"name": 1, "goals_scored": 1, "goals_conceded": 1, standings: 1, "_id": 0 })
            .toArray()

            const teams: Team[] = bigSixGoalsDocs.map((document: Document) => ({
                name: document.name,
                goals_scored: document.goals_scored,
                goals_conceded: document.goals_conceded,
                standings: document.standings
            }))
    
            return NextResponse.json(teams)
    } catch (error) {
        return String(error)
    }
}