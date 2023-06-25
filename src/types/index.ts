export interface Team {
	name: string,
	goals_conceded: {
		home: number,
		away: number
	},
	goals_scored: {
		home: number,
		away: number
	},
	standings: number[]
}

export interface Goals {
	name: string,
	home: number,
	away: number
}

interface Data {
	match: number,
	value: number
}
export interface LineGraphData {
	name: string,
	data: Data[]
}