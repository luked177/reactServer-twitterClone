"use client";
import React, { useState, useTransition } from "react";
import { submitPost } from "../DB/mutations/submitPost";
import { useUser } from "@clerk/nextjs";

export default function AddPost({}) {
	const [post, setPost] = useState("");
	const [isPending, startTransition] = useTransition();

	const user = useUser();

	const userObject = {
		username: user.user?.username,
		id: user.user?.id,
	};

	return (
		<div className='flex flex-col w-full border border-sky-400 rounded p-4'>
			{isPending ? (
				<p>Posting...</p>
			) : (
				<>
					<input className='bg-slate-100 rounded focus-visible:outline-none' type='text' value={post} onChange={(e) => setPost(e.target.value)} />
					<button
						onClick={() =>
							startTransition(() => {
								setPost("");
								submitPost(post, userObject);
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
