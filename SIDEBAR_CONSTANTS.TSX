import React from "react";
import { BsGear, BsHouseDoor, BsKanban, BsListUl, BsQuestionCircle, BsEnvelope } from "react-icons/bs";
import { SideNavItem } from "./types/types";


export const SIDENAV_ITEMS: SideNavItem[] = [
    { 
        title: "Dashboard", 
        path: "/", 
        icon: <BsHouseDoor size={20} /> 
    },
    
        {
          title: 'Products',
          path: '/products',
          icon: <BsKanban size={20} />,
          submenu: true,
          subMenuItems: [
            { title: 'All', path: '/products' },
            { title: 'New', path: '/products/new' }
          ],
        },
        {
          title: 'Orders',
          path: '/orders',
          icon: <BsListUl size={20} />
        },
        {
          title: 'Feedbacks',
          path: '/feedbacks',
          icon: <BsEnvelope size={29} />
        },
        {
          title: 'Account',
          path: '/account',
          icon: <BsGear size={20} />
        },
        {
          title: 'Help',
          path: '/help',
          icon: <BsQuestionCircle size={20} />
        }
      ];
      

  