// import React from "react";
// import { BsGear, BsHouseDoor, BsKanban, BsListUl, BsQuestionCircle, BsEnvelope } from "react-icons/bs";
// import { SideNavItem } from "./types/types";


// export const SIDENAV_ITEMS: SideNavItem[] = [
//     { 
//         title: "Dashboard", 
//         path: "/", 
//         icon: <BsHouseDoor size={20} /> 
//     },

//         {
//           title: 'Products',
//           path: '/products',
//           icon: <BsKanban size={20} />,
//           submenu: true,
//           subMenuItems: [
//             { title: 'All', path: '/products' },
//             { title: 'New', path: '/products/new' }
//           ],
//         },
//         {
//           title: 'Orders',
//           path: '/orders',
//           icon: <BsListUl size={20} />
//         },
//         {
//           title: 'Feedbacks',
//           path: '/feedbacks',
//           icon: <BsEnvelope size={29} />
//         },
//         {
//           title: 'Account',
//           path: '/account',
//           icon: <BsGear size={20} />
//         },
//         {
//           title: 'Help',
//           path: '/help',
//           icon: <BsQuestionCircle size={20} />
//         }
//       ];

// import React from "react";

// import { BsGear, BsHouseDoor, BsListUl, BsPerson } from "react-icons/bs";
// import { SideNavItem } from "./types/types";

// export const SIDENAV_ITEMS: SideNavItem[] = [
//   {
//     title: "Dashboard",
//     path: "/",
//     icon: <BsHouseDoor size={20} />,
//     submenu: true,
//     subMenuItems: [
//       { title: "Merchant", path: "/dashboard/merchant" },
//       { title: "Entrepreneur", path: "/dashboard/entrepreneur" },
//       { title: "Farmer Group", path: "/dashboard/farmer-group" },
//       { title: "Farmers", path: "/dashboard/farmers" }
//     ]
//   },
//   {
//     title: "Invoice",
//     path: "/invoices",
//     icon: <BsListUl size={20} />,
//     submenu: true,
//     subMenuItems: [
//       { title: "Create Invoice", path: "/invoices/create" },
//       { title: "View Invoices", path: "/invoices/view" }
//     ]
//   },
//   {
//     title: "Account",
//     path: "/account",
//     icon: <BsGear size={20} />,
//     submenu: true,
//     subMenuItems: [
//       { title: "Profile", path: "/account/profile" },
//       { title: "Settings", path: "/account/settings" }
//     ]
//   },
//   {
//     title: "Authentication",
//     path: "/authentication",
//     icon: <BsPerson size={20} />,
//     submenu: true,
//     subMenuItems: [
//       { title: "Login", path: "/authentication/login" },
//       { title: "Register", path: "/authentication/register" },
//       { title: "Forgot Password", path: "/authentication/forgot-password" }
//     ]
//   }
// ];



// import React from "react";

// import { BsGear, BsHouseDoor, BsListUl, BsPerson } from "react-icons/bs";
// import { SideNavItemGroup } from "./types/types";

// export const SIDENAV_ITEMS: SideNavItemGroup[] = [
//   {
//     title: "Main Menu",
//     menuList: [
//       {
//         title: "Dashboard",
//         path: "/",
//         icon: <BsHouseDoor size={20} />,
//         submenu: true,
//         subMenuItems: [
//           { title: "Admin Dashboard", path: "/AdminDashboard" },
//           { title: "User Dashboard", path: "/userDashboard" }
//         ]
//       }
//     ]
//   },
//   {
//     title: "Dashboard",
//     menuList: [
//       {
//         title: "Dashboard",
//         path: "/dashboard",
//         icon: <BsHouseDoor size={20} />,
//         submenu: true,
//         subMenuItems: [
//           { title: "Merchant", path: "/dashboard/merchant" },
//           { title: "Entrepreneur", path: "/dashboard/entrepreneur" },
//           { title: "Farmer Group", path: "/dashboard/farmer-group" },
//           { title: "Farmers", path: "/dashboard/farmers" }
//         ]
//       }
//     ]
//   },
//   {
//     title: "Invoice",
//     menuList: [
//       {
//         title: "Invoice",
//         path: "/invoices",
//         icon: <BsListUl size={20} />,
//         submenu: true,
//         subMenuItems: [
//           { title: "Create Invoice", path: "/invoices/create" },
//           { title: "View Invoices", path: "/invoices/view" }
//         ]
//       }
//     ]
//   },
//   {
//     title: "Account",
//     menuList: [
//       {
//         title: "Account",
//         path: "/account",
//         icon: <BsGear size={20} />,
//         submenu: true,
//         subMenuItems: [
//           { title: "Profile", path: "/account/profile" },
//           { title: "Settings", path: "/account/settings" }
//         ]
//       }
//     ]
//   },
//   {
//     title: "Authentication",
//     menuList: [
//       {
//         title: "Authentication",
//         path: "/authentication",
//         icon: <BsPerson size={20} />,
//         submenu: true,
//         subMenuItems: [
//           { title: "Login", path: "/authentication/login" },
//           { title: "Register", path: "/authentication/register" },
//           { title: "Forgot Password", path: "/authentication/forgot-password" }
//         ]
//       }
//     ]
//   },
//   {
//     title: "Authentication",
//     menuList: [
//       {
//         title: "Authentication",
//         path: "/authentication",
//         icon: <BsPerson size={20} />,
//         submenu: true,
//         // subMenuItems: [
//         //   { title: "Login", path: "/authentication/login" },
//         //   { title: "Register", path: "/authentication/register" },
//         //   { title: "Forgot Password", path: "/authentication/forgot-password" }
//         // ]
//       }
//     ]
//   },

// ];


import React from "react";
import { BsGear, BsHouseDoor, BsListUl, BsPerson, BsTruck } from "react-icons/bs";
import { SideNavItemGroup } from "./types/types";

export const SIDENAV_ITEMS: SideNavItemGroup[] = [
  {
    title: "Main Menu",
    menuList: [
      {
        title: "Dashboard",
        path: "/AdminDashboard",
        icon: <BsHouseDoor size={20} />,
        submenu: true,
        subMenuItems: [
          { title: "Admin Dashboard", path: "/AdminDashboard" },
          { title: "User Dashboard", path: "/userDashboard" }
        ]
      },
      {
        title: "Setup",
        path: "/setup",
        icon: <BsHouseDoor size={20} />,
        submenu: true,
        subMenuItems: [
          { title: "Merchant", path: "/setup/merchant" },
          { title: "Entrepreneur", path: "/setup/entrepreneur" },
          { title: "Farmer Group", path: "/setup/farmer-group" },
          { title: "Farmers", path: "/setup/farmers" }
        ]
        
      },{
        title: "Vendor",
        path: "/vendor",
        icon: <BsListUl size={20} />,
        submenu: true,
        subMenuItems: [
          { title: "Invoice", path: "/invoices/invoicestable" },
          { title: "Create Invoice", path: "/invoices/create" },
          { title: "View Invoices", path: "/invoices/view" }
        ]
      },

      {
        title: "Invoices",
        path: "/invoices",
        icon: <BsListUl size={20} />,
        submenu: true,
        subMenuItems: [
          { title: "Invoice", path: "/invoices/invoicestable" },
          { title: "Create Invoice", path: "/invoices/create" },
          { title: "View Invoices", path: "/invoices/view" }
        ]
      }
      
    ]
  },
  {
    title: "Management",
    menuList: [
      {
        title: "Accounts",
        path: "/accounts",
        icon: <BsGear size={20} />,
        submenu: true,
        subMenuItems: [
          { title: "Profile", path: "/account/profile" },
          { title: "Settings", path: "/account/settings" }
        ]
      }
    ]
  },
  {
    title: "Pages",
    menuList: [
      {
        title: "Authentication",
        path: "/authentication",
        icon: <BsPerson size={20} />,
        submenu: true,
        subMenuItems: [
          { title: "Login", path: "/authentication/login" },
          { title: "Register", path: "/authentication/register" },
          { title: "Forgot Password", path: "/authentication/forgot-password" }
        ]
      },
      {
        title: "Blank Page",
        path: "/blank",
        icon: <BsPerson size={20} />
      }
    ]
  },
  {
    title: "Others",
    menuList: [
      {
        title: "Transport",
        path: "/transport",
        icon: <BsTruck size={20} />
      }
    ]
  }
];
