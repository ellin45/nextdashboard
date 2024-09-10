import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI as string;

let client: MongoClient | null = null;

const connectDB = async (): Promise<MongoClient> => {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    console.log('MongoDB connected successfully');
  }
  return client;
};

export default connectDB;
