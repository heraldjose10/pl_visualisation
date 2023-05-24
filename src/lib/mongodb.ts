import { MongoClient, MongoDBNamespace } from 'mongodb'

if (!process.env.MONGODB_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI

const options = {}

let cachedClient: MongoClient | null = null;

export async function connectToDatabase(): Promise<MongoClient> {

	// return cached client if present
	if (cachedClient) {
		return cachedClient;
	}

	// make new db connection
	const client = await MongoClient.connect(uri, options);

	cachedClient = client;
	return client;
}