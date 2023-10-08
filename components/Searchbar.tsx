"use client";

import { FormEvent, useState } from "react";

const isValidAmazonLink = (url: string) => {
	try {
		const parsedUrl = new URL(url);
		const hostname = parsedUrl.hostname;

		if (
			hostname.includes("amazon.com") ||
			hostname.includes("amazon.") ||
			hostname.includes("amazon")
		) {
			return true;
		}
	} catch (error) {
		return false;
	}
	return false;
};

const Searchbar = () => {
	const [searchPrompt, setSearchPrompt] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const validLnik = isValidAmazonLink(searchPrompt);
		if (!validLnik) return alert("enter a valid amazon link");
		try {
			setIsLoading(true);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
			<input
				type="text"
				className="searchbar-input"
				onChange={(e) => setSearchPrompt(e.target.value)}
			/>
			<button
				type="submit"
				placeholder="Enter Product Link"
				className="searchbar-btn"
				disabled={searchPrompt === ""}
			>
				{isLoading ? "Searching..." : "Search"}
			</button>
		</form>
	);
};

export default Searchbar;
