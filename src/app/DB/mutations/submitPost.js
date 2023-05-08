"use server";
import { revalidatePath } from "next/cache";
import { getContainer } from "../getContainer";

export const submitPost = async (post, user) => {
	const container = await getContainer();
	const postToSubmit = {
		post: post,
		author: user.username,
		authorId: user.id,
		time: new Date(),
		id: crypto.randomUUID(),
		likes: 0,
	};

	await container.items.create(postToSubmit);
	revalidatePath(`/`);
};
