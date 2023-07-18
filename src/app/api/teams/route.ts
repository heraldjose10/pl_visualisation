import { NextResponse } from 'next/server';
import type { Document } from 'mongodb';

import { connectToDatabase } from "@/lib/mongodb";
import { TeamLogos } from "@/types";


export async function GET() {
    // this fucntion returns the details of every teams
    const client = await connectToDatabase()
    const db = client.db("premier_league_2023")

    try {
        const teamLogosDocs: Document[] = await db
            .collection("teams")
            .find()
            .project({ "name": 1, "logo_link": 1, "hex_code": 1, "_id": 0 })
            .toArray()

        const teamLogos: TeamLogos[] = teamLogosDocs.map((team: Document) => ({
            name: team.name,
            logo: team.logo_link,
            hex: team.hex_code
        }))

        return NextResponse.json(teamLogos)
    } catch (e) {
        return String(e)
    }
}