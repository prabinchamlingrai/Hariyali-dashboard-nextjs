import classNames from "classnames";
import { useState } from "react";


const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <input
                value={searchQuery || ""}
                onChange={(event) => setSearchQuery(event.target.value)}
                className=" px-5 py-1 w-3/3 sm:px-5 sm:py-3 flex-1 text-center text-zinc-200 bg-green-500 focus:bg-white rounded-full focus:outline-none focus:ring-[2px] focus:ring-green-700 placeholder:text-yellow-300"
                placeholder="Search for ?"
              />
);
    
}
export default SearchInput;
































// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";

// const SearchInput = () => {
//   const search = useSearchParams();
//   const [searchQuery, setSearchQuery] = useState<string | null>(
//     search ? search.get("q") : ""
//   );
//   const router = useRouter();

//   const onSearch = (event: React.FormEvent) => {
//     event.preventDefault();

//     if (typeof searchQuery !== "string") {
//       return;
//     }

//     const encodedSearchQuery = encodeURI(searchQuery);
//     router.push(`/search?q=${encodedSearchQuery}`);
//   };

//   return (
//     <form onSubmit={onSearch} className="flex justify-center w-2/3">
//       <input
//         value={searchQuery || ""}
//         onChange={(event) => setSearchQuery(event.target.value)}
//         className=" px-5 py-1 w-3/3 sm:px-5 sm:py-3 flex-1 text-center text-zinc-200 bg-green-500 focus:bg-white rounded-full focus:outline-none focus:ring-[2px] focus:ring-green-700 placeholder:text-yellow-400"
//         placeholder="What are you looking for?"
//       />
//     </form>
//   );
// };

// export default SearchInput;