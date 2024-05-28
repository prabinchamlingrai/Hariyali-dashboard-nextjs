import React, { ChangeEvent, useState } from 'react';

interface SearchInputProps {
    onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div className="flex items-center">
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleChange}
                className="px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
            />
            <button
                onClick={handleSearch}
                className="ml-2 px-3 py-1 bg-green-700 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
                Search
            </button>
        </div>
    );
};

export default SearchInput;





















// // "use client";

// // import { useRouter, useSearchParams } from "next/navigation";
// // import { useState } from "react";

// // const SearchInput = () => {
// //   const search = useSearchParams();
// //   const [searchQuery, setSearchQuery] = useState<string | null>(
// //     search ? search.get("q") : ""
// //   );
// //   const router = useRouter();

// //   const onSearch = (event: React.FormEvent) => {
// //     event.preventDefault();

// //     if (typeof searchQuery !== "string") {
// //       return;
// //     }

// //     const encodedSearchQuery = encodeURI(searchQuery);
// //     router.push(`/search?q=${encodedSearchQuery}`);
// //   };

// //   return (
// //     <form onSubmit={onSearch} className="flex justify-center w-2/3">
// //       <input
// //         value={searchQuery || ""}
// //         onChange={(event) => setSearchQuery(event.target.value)}
// //         className=" px-5 py-1 w-3/3 sm:px-5 sm:py-3 flex-1 text-center text-zinc-200 bg-green-500 focus:bg-white rounded-full focus:outline-none focus:ring-[2px] focus:ring-green-700 placeholder:text-yellow-400"
// //         placeholder="What are you looking for?"
// //       />
// //     </form>
// //   );
// // };

// import { useState, useEffect } from "react";

// const SearchInput = () => {
//     const [searchQuery, setSearchQuery] = useState("");
//     const [isClient, setIsClient] = useState(false);

//     useEffect(() => {
//         setIsClient(true);
//     }, []);

//     if (!isClient) {
//         return null; // Render nothing on the server side
//     }

//     const isMobile = window.innerWidth <= 768;

//     if (isMobile) {
//         return null; // Return null to not render the search input on mobile devices
//     }

//     return (
//         <input
//             value={searchQuery || ""}
//             onChange={(event) => setSearchQuery(event.target.value)}
//             className="px-5 py-1 w-3/3 sm:px-5 sm:py-3 flex-1 text-center text-zinc-200 bg-green-500 focus:bg-white rounded-full focus:outline-none focus:ring-[2px] focus:ring-green-700 placeholder:text-yellow-300"
//             placeholder="Search for ?"
//         />
//     );
// };

// export default SearchInput;
