export interface Team {
	name: string,
	goals_conceded: {
		home: number,
		away: number
	},
	goals_scored: {
		home: number,
		away: number
	}
}

interface GoalDifference {
	match: number,
	goal_diff: number
}
export interface GoalDifferenceData {
	name: string,
	data: GoalDifference[]
}