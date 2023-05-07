import { CosmosClient } from "@azure/cosmos";

export const getContainer = async () => {
	const endpoint = await process.env.DB_URI;
	const key = await process.env.DB_KEY;
	const client = new CosmosClient({ endpoint, key });
	const { database } = await client.databases.createIfNotExists({ id: "TwitterClone" });
	const { container } = await database.containers.createIfNotExists({ id: "Posts" });

	return container;
};
