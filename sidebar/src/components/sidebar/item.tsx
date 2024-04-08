"use client";
import React, { useMemo, useState } from 'react'

import { LucideIcon, ChevronDown } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation';

import SubMenueItem from './submenue-item';

interface ISidebarItem {
    name: string;
    icon: LucideIcon;
    path: string;
    items?: ISubItem[];
}

interface ISubItem {
    name: string;
    path: string;
}

const SidebarItem = ({item}:{item: ISidebarItem}) => {
    const {name, icon: Icon, items, path} = item;
    // for the dropdown
    const [expanded, setExpanded] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    const onClick = () => {
        if(items && items.length>0){
            //for collapes
           return setExpanded(!expanded);
        }
        router.push(path);
    };

    const isActive = useMemo(() =>{
        if (items && items.length >0){
        if (items.find((item) => item.path === pathname)){
            setExpanded(true);
            return true;
        }
    }

   return path === pathname;
    },[path,pathname,items]);
    

  return (
    <>
    <div className={`flex item-center rounded-lg hover:bg-sidebar-background cursor-pointer hover:text-sidebar-active justify-between text-sidebar-iconColor' ${isActive && "text-sidebar-active"}`} onClick={onClick}
    >
        <div className='flex items-center space-x-2' >
    <Icon size={20}/>
    <p className='text-sm font-semibold'>{name}</p>
    </div>
    {/* for icon movement */}
    {items && items.length>0 &&(
    <ChevronDown size={18} className={expanded ? "rotate-180 duration-200": ""} />
    )}
    </div>

    {expanded &&
     items &&
     items.length>0 && (<div className='flex flex-col space-y-2 ml-7 mt-2'>
      {items.map((item) => <SubMenueItem key={item.path}
     item={item}
     /> )}  
     </div>)
     }
    </>
  )
}

export default SidebarItem
