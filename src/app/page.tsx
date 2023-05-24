import { connectToDatabase } from '../lib/mongodb'

// check the connection
async function fetchData() {
	try {
		const client = await connectToDatabase();
		const db = client.db("premier_league_2023");

		const teams = await db
			.collection("teams")
			.find({})
			.toArray();

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
		<main>
			<h1>This is the HomePage</h1>
			<h1>{data}</h1>
		</main>
	)
}
