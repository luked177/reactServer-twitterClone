"use server";
import { revalidatePath } from "next/cache";
import { getContainer } from "../getContainer";

export const submitPost = async (post) => {
	const container = await getContainer();
	const postToSubmit = {
		post: post,
		author: "Luke",
		time: new Date(),
		id: crypto.randomUUID(),
		likes: 0,
	};

	await container.items.create(postToSubmit);
	revalidatePath(`/`);
};
