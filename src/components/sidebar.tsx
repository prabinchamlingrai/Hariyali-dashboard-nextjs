import React from 'react';
import { SIDENAV_ITEMS } from "@/SIDEBAR_CONSTANTS";
// import { SideBarMenuItem } from "./sidebar-menu-item";
import classNames from "classnames";
import MyImageComponent from './image';
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import SideBarMenuGroup from './sidebar-menu-group';
import { BsList } from "react-icons/bs";

export default function SideBar() {
    const { toggleCollapse, invokeToggleCollapse } = useSideBarToggle();
    const asideStyle = classNames("sidebar overflow-y-auto fixed bg-[#fcfdff] text-gray-500 z-50 h-full shadow-gray-900/20 transition duration-3000 ease-in-out", 
    {
        ["w-[20rem]"]: !toggleCollapse , 
        ["w-[5.4rem] sm:left-0 left-[-100%]"]: toggleCollapse
    });

    return (
        <aside className={asideStyle}>
            
           <div className="flex relative items-center p-0.5 px-3.5">
                <MyImageComponent />
            </div>
            <nav className="flex flex-col gap-2 transition duration-300 ease-in-out">
                <div className="flex flex-col gap-2 px-4">
                    {SIDENAV_ITEMS.map((item, index) => (
                        <SideBarMenuGroup key={index} menuGroup={item} />
                    ))}
                </div>
            </nav>
            {/* Toggle button for medium-sized screens */}
             <button
                    onClick={invokeToggleCollapse}
                    className="md:hidden absolute top-4 right-4 bg-[#366f36] text-[#fafafa] hover:bg-[#71da71] ml-3 rounded-md w-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center"
                    aria-label="Toggle Sidebar"
                >
                {/* <BsList size={30} /> */}
                x
            </button>
        </aside>
    );
}
