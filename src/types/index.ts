export interface Team {
	name: string,
	home_goals: number,
	away_goals: number
}

interface GoalDifference {
	match: number,
	goal_diff: number
}
export interface GoalDifferenceData {
	name: string,
	data: GoalDifference[]
}