"use client";

const Searchbar = () => {
	const handleSubmit = () => {};
	return (
		<form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
			<input type="text" className="searchbar-input" />
			<button
				type="submit"
				placeholder="Enter Product Link"
				className="searchbar-btn"
			>
				Search
			</button>
		</form>
	);
};

export default Searchbar;
