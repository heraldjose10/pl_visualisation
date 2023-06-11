import type { Document } from 'mongodb';
import { connectToDatabase } from '../lib/mongodb'
import { Team } from '@/types';

import TextBlock from '@/components/text-block';
import StackedBarChart from '@/components/stacked-bar-chart';


async function fetchData() {
	try {
		const client = await connectToDatabase();
		const db = client.db("premier_league_2023");

		// get goals data
		const teamDocs: Document[] = await db
			.collection("teams")
			.find({ "name": { "$in": ["Man City", "Man United", "Arsenal", "Liverpool", "Chelsea", "Tottenham"] } })
			.project({ "name": 1, "home_goals": 1, "away_goals": 1, "_id": 0 })
			.toArray()

		const teams: Team[] = teamDocs.map((document: Document) => ({
			name: document.name,
			home_goals: document.home_goals,
			away_goals: document.away_goals
		}))

		return (teams)

	} catch (e) {
		console.error(e)
		return (String(e))
	}
}

export default async function Home() {

	const data = await fetchData()

	return (
		<main className='bg-white py-[200px] flex flex-col gap-16'>
			<TextBlock
				heading='Introduction'
				texts={
					[
						'Sed id est non augue sodales rhoncus id vitae tortor. Pellentesque id urna mattis libero consectetur vulputate posuere vitae nisl. Vivamus condimentum mattis turpis, ut dignissim nunc sagittis quis. Proin non odio nibh. Cras placerat nisi eget eleifend iaculis. Donec id varius elit, sed commodo dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis venenatis magna eget dolor consequat, eu suscipit ante aliquam. Proin magna odio, semper id dapibus sit amet, euismod eu mi. Vivamus eu ex nec purus interdum accumsan. Phasellus pretium libero eget purus bibendum, nec rhoncus risus ultricies. Suspendisse ut est urna. Integer condimentum ligula erat, sed semper elit dapibus in. Vivamus laoreet ornare lectus, non varius libero commodo et.',
						'Vestibulum aliquam aliquet arcu. Donec accumsan erat eu arcu semper aliquet. Vivamus a tellus quis nisi convallis fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris condimentum convallis leo quis gravida. Vivamus eu nunc ex. Quisque nec neque eros. Cras dapibus ultrices nulla et elementum.'
					]
				}
				// TODO: fix the layout change issue on render
				graph={typeof data !== "string" ? <StackedBarChart data={data as Team[]} /> : ''}
			/>
			<TextBlock
				heading='Heading 2'
				texts={
					[
						'Sed id est non augue sodales rhoncus id vitae tortor. Pellentesque id urna mattis libero consectetur vulputate posuere vitae nisl. Vivamus condimentum mattis turpis, ut dignissim nunc sagittis quis. Proin non odio nibh. Cras placerat nisi eget eleifend iaculis. Donec id varius elit, sed commodo dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis venenatis magna eget dolor consequat, eu suscipit ante aliquam. Proin magna odio, semper id dapibus sit amet, euismod eu mi. Vivamus eu ex nec purus interdum accumsan. Phasellus pretium libero eget purus bibendum, nec rhoncus risus ultricies. Suspendisse ut est urna. Integer condimentum ligula erat, sed semper elit dapibus in. Vivamus laoreet ornare lectus, non varius libero commodo et.',
						'Vestibulum aliquam aliquet arcu. Donec accumsan erat eu arcu semper aliquet. Vivamus a tellus quis nisi convallis fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris condimentum convallis leo quis gravida. Vivamus eu nunc ex. Quisque nec neque eros. Cras dapibus ultrices nulla et elementum.'
					]
				}
			/>
			<TextBlock
				heading='Heading 3'
				texts={
					[
						'Sed id est non augue sodales rhoncus id vitae tortor. Pellentesque id urna mattis libero consectetur vulputate posuere vitae nisl. Vivamus condimentum mattis turpis, ut dignissim nunc sagittis quis. Proin non odio nibh. Cras placerat nisi eget eleifend iaculis. Donec id varius elit, sed commodo dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis venenatis magna eget dolor consequat, eu suscipit ante aliquam. Proin magna odio, semper id dapibus sit amet, euismod eu mi. Vivamus eu ex nec purus interdum accumsan. Phasellus pretium libero eget purus bibendum, nec rhoncus risus ultricies. Suspendisse ut est urna. Integer condimentum ligula erat, sed semper elit dapibus in. Vivamus laoreet ornare lectus, non varius libero commodo et.',
						'Vestibulum aliquam aliquet arcu. Donec accumsan erat eu arcu semper aliquet. Vivamus a tellus quis nisi convallis fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris condimentum convallis leo quis gravida. Vivamus eu nunc ex. Quisque nec neque eros. Cras dapibus ultrices nulla et elementum.'
					]
				}
			/>
			<TextBlock
				heading='Conclusion'
				texts={
					[
						'Sed id est non augue sodales rhoncus id vitae tortor. Pellentesque id urna mattis libero consectetur vulputate posuere vitae nisl. Vivamus condimentum mattis turpis, ut dignissim nunc sagittis quis. Proin non odio nibh. Cras placerat nisi eget eleifend iaculis. Donec id varius elit, sed commodo dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis venenatis magna eget dolor consequat, eu suscipit ante aliquam. Proin magna odio, semper id dapibus sit amet, euismod eu mi. Vivamus eu ex nec purus interdum accumsan. Phasellus pretium libero eget purus bibendum, nec rhoncus risus ultricies. Suspendisse ut est urna. Integer condimentum ligula erat, sed semper elit dapibus in. Vivamus laoreet ornare lectus, non varius libero commodo et.',
						'Vestibulum aliquam aliquet arcu. Donec accumsan erat eu arcu semper aliquet. Vivamus a tellus quis nisi convallis fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris condimentum convallis leo quis gravida. Vivamus eu nunc ex. Quisque nec neque eros. Cras dapibus ultrices nulla et elementum.'
					]
				}
			/>
		</main>
	)
}
