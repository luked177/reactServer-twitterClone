"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState, useTransition } from "react";

export default function Search({}) {
	const ref = useRef();
	const { replace } = useRouter();
	const pathname = usePathname();
	const params = new URLSearchParams(window.location.search);
	const [searchTerm, setSearchTerm] = useState(params.get("search") || "");

	const handleSearch = (searchValue) => {
		if (searchValue) {
			params.set("search", searchValue);
		} else {
			params.delete("search");
		}

		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<div>
			<input
				ref={ref}
				className='bg-white rounded focus-visible:outline-none text-black'
				type='text'
				onChange={(e) => {
					setSearchTerm(e.target.value);
					handleSearch(e.target.value);
				}}
				defaultValue={searchTerm}
			/>
			{searchTerm.length > 0 && (
				<button
					onClick={() => {
						ref.current.value = null;
						setSearchTerm("");
						params.delete("search");
						replace(`${pathname}?${params.toString()}`);
					}}
				>
					❌
				</button>
			)}
		</div>
	);
}
