import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import classNames from "classnames";
import { BsList, BsSearch, BsBell } from "react-icons/bs";
import { useState } from "react";

export default function Header() {
    const { toggleCollapse, invokeToggleCollapse } = useSideBarToggle();
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);

    const toggleSearch = () => {
        setIsSearchExpanded(!isSearchExpanded);
    };

    const headerStyle = classNames(
        "fixed bg-[#fcfdff] w-full z-10 px-4 shadow-sm shadow-slate-500/40",
        {
            ["sm:pl-[20rem]"]: !toggleCollapse,
            ["sm:pl-[5.6rem]"]: toggleCollapse,
        }
    );

    return (
        <header className={headerStyle}>
            <div className="flex items-center justify-between h-16">
                <button
                    onClick={invokeToggleCollapse}
                    className="order-1 sm:order-1 bg-[#366f36] text-[#fafafa] hover:bg-[#71da71] ml-3 rounded-md w-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center"
                    aria-label="Toggle Sidebar"
                >
                    <BsList size={30} />
                </button>

                {/* Search input and button */}
                <div className="order-2 sm:order-2 flex items-center relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className={`bg-gray-200 rounded-md p-2 ${
                            isSearchExpanded ? "block" : "hidden sm:block"
                        } focus:outline-none focus:ring-2 focus:ring-green-400`}
                    />
                    <button
                        onClick={toggleSearch}
                        className={`bg-transparent text-gray-600 hover:text-gray-900 ml-3 rounded-md w-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center ${
                            isSearchExpanded ? "hidden sm:block" : "sm:hidden"
                        }`}
                        aria-label="Toggle Search"
                    >
                        <BsSearch size={24} />
                    </button>
                </div>

                {/* Notification bell */}
                {/* <button
                    className="order-3 sm:order-3 bg-transparent text-gray-600 hover:text-gray-900 ml-3  rounded-md w-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center"
                    aria-label="Notifications"
                >
                    <BsBell size={24} />
                </button> */}

                {/* Initials or logo */}
                <div className="order-4 sm:order-4 h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center">
                    <span className="font-semibold text-sm">SR</span>
                </div>
            </div>
        </header>
    );
}
