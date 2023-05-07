import React from "react";
import LikeButton from "./likeButton";

export default function Post({ postData }) {
	return (
		<div className='border border-sky-500 rounded w-2/4 h-fit'>
			<h1>{postData.author}</h1>
			<p>{postData.post}</p>
			<LikeButton likes={postData.likes} postId={postData.id} />
		</div>
	);
}
