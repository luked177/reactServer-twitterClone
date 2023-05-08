"use client";
import React from "react";
import { useState } from "react";

export default function Search({}) {
	const [search, setSearch] = useState("");
	return (
		<div>
			<input className='bg-white rounded focus-visible:outline-none text-black' type='text' onBlur={(e) => setSearch(e.target.value)} />
		</div>
	);
}
