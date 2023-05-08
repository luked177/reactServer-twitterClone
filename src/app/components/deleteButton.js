"use client";
import React, { useTransition } from "react";
import { deletePost } from "../DB/mutations/deletePost";

export default function DeleteButton({ postId }) {
	const [isPending, startTransition] = useTransition();

	return (
		<div className='flex gap-2'>
			<button onClick={() => startTransition(() => deletePost(postId))}>{isPending ? "..." : "❌"}</button>
		</div>
	);
}
