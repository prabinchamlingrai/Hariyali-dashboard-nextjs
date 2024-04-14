import React from 'react';
import { SIDENAV_ITEMS } from "@/SIDEBAR_CONSTANTS";
import { SideBarMenuItem } from "./sidebar-menu-item";
import classNames from "classnames";
import MyImageComponent from './image';
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import SideBarMenuGroup from './sidebar-menu-group';

export default function SideBar() {
    const {toggleCollapse} = useSideBarToggle();
    const asideStyle = classNames("sidebar overflow-y-auto fixed bg-[#fcfdff] text-gray-500 z-50 h-full shadow-gray-900/20 transition duration-3000 ease-in-out", 
    {
        ["w-[20rem]"]: !toggleCollapse , 
        ["w-[5.4rem] sm:left-0 left-[-100%]"]: toggleCollapse
   

    });

    return (
        <aside className={asideStyle}>
            <div className="flex relative items-center p-0 px-3.5">
                {/* <Image alt="" src='/hariyali-abhiyan-logo-3.png' className="w-40 mx-3.5 min-h-fit" width={35} height={35} /> */}

                <MyImageComponent/>
            </div>
            <nav className="flex flex-col gap-2 transition duration-300 ease-in-out">
                <div className="flex flex-col gap-2 px-4">
                    {SIDENAV_ITEMS.map((item, index) => (
                        <SideBarMenuGroup key={index} menuGroup={item} />
                    ))}
                </div>
            </nav>
        </aside>
    );
}
