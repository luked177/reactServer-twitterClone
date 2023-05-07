"use client";
import React, { useTransition } from "react";
import { likePost } from "../DB/mutations/likePost";

export default function LikeButton({ likes, postId }) {
	const [isPending, startTransition] = useTransition();

	return (
		<div className='flex gap-2'>
			<button onClick={() => startTransition(() => likePost(postId))}>💕</button>
			{isPending ? <p>...</p> : <p>{likes}</p>}
		</div>
	);
}
