"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const isValidAmazonLink = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    if (hostname.includes("amazon.com") || hostname.includes("amazon.") || hostname.includes("amazon")) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
};

const Searchbar = () => {
  const router = useRouter();
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validLink = isValidAmazonLink(searchPrompt);
    if (!validLink) return alert("enter a valid amazon link");
    try {
      setIsLoading(true);
      const productId = await scrapeAndStoreProduct(searchPrompt);
      if (!productId) return;
      router.push(`/products/${productId}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input type="text" className="searchbar-input" onChange={(e) => setSearchPrompt(e.target.value)} />
      <button
        type="submit"
        placeholder="Enter Product Link"
        className="searchbar-btn"
        disabled={searchPrompt === ""}>
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default Searchbar;
