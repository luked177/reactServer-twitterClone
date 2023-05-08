"use server";
import { revalidatePath } from "next/cache";
import { getContainer } from "../getContainer";

export const deletePost = async (postID) => {
	const container = await getContainer();
	const item = await container.item(postID);
	await item.delete();
	revalidatePath(`/`);
};
