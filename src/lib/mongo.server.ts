import { MongoClient, type Db } from "mongodb";

let clientPromise: Promise<MongoClient> | undefined;

export const DB_NAME = "phoenix_india";
export const ENQUIRIES_COLLECTION = "enquiries";

export async function getMongoDb(): Promise<Db> {
  const uri = process.env["MONGODB_URI"];
  if (!uri) throw new Error("MONGODB_URI is not configured");

  if (!clientPromise) {
    clientPromise = new MongoClient(uri, {
      serverSelectionTimeoutMS: 10_000,
    })
      .connect()
      .catch((error) => {
        clientPromise = undefined;
        throw error;
      });
  }

  return (await clientPromise).db(DB_NAME);
}
