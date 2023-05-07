"use server";
import { revalidatePath } from "next/cache";
import { getContainer } from "../getContainer";

export const likePost = async (postID) => {
	const container = await getContainer();
	const item = await container.item(postID);

	const operations = [
		{
			op: "incr",
			path: "/likes",
			value: 1,
		},
	];

	await item.patch(operations);
	revalidatePath(`/`);
};
