import React from "react";
import LikeButton from "./likeButton";
import { auth } from "@clerk/nextjs";
import DeleteButton from "./deleteButton";

export default function Post({ postData }) {
	const { userId } = auth();
	return (
		<div className='border border-sky-500 rounded w-full h-fit'>
			<h1>{postData.author}</h1>
			<p>{postData.post}</p>
			<LikeButton likes={postData.likes} postId={postData.id} />
			{userId === postData.authorId && <DeleteButton postId={postData.id} />}
		</div>
	);
}
