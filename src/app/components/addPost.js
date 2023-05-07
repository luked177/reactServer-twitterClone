"use client";
import React, { useState, useTransition } from "react";
import { submitPost } from "../DB/mutations/submitPost";

export default function AddPost({}) {
	const [post, setPost] = useState("");
	const [isPending, startTransition] = useTransition();

	return (
		<div className='flex flex-col w-2/4 border border-sky-400 rounded p-4'>
			{isPending ? (
				<p>Posting...</p>
			) : (
				<>
					<input className='bg-slate-100 rounded focus-visible:outline-none' type='text' value={post} onChange={(e) => setPost(e.target.value)} />
					<button
						onClick={() =>
							startTransition(() => {
								setPost("");
								submitPost(post);
							})
						}
					>
						Submit Post
					</button>
				</>
			)}
		</div>
	);
}
