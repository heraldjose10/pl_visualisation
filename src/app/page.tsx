import TextBlock from '@/components/text-block';
import { connectToDatabase } from '../lib/mongodb'

// check the connection
async function fetchData() {
	try {
		const client = await connectToDatabase();
		const db = client.db("premier_league_2023");

		const teams = await db
			.collection("teams")
			.find({})
			.project({"name":1, "_id":0})
			.toArray();

			console.log(teams);
			
		return ('connected!!')

	} catch (e) {
		console.error(e)
		return ('not connected')
	}
}

export default async function Home() {

	const data = await fetchData()

	console.log(data);

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
