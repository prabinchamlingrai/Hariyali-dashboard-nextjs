// import classNames from "classnames";
// import { Dispatch, SetStateAction } from "react";
// import { BsList } from "react-icons/bs";
// import SearchInput from "./SearchInput";

// export default function Header({toggleCollapse,setToggleCollapse}:{toggleCollapse:boolean,setToggleCollapse:Dispatch<SetStateAction<boolean>>}) {
//     const SideBarToggle=() =>{
//         setToggleCollapse(!toggleCollapse);
//     }
//     const headerStyle= classNames("fixed bg-[#fcfdff] w-full z-0 px-4 shadow-sm shadow-slate-500/40 ",
//     {
//         ["sm:pl-[20rem]"]:!toggleCollapse,
//         ["sm:pl-[5.6rem]"]:toggleCollapse,
//     })
//     return (
//         <header className={headerStyle}>
//             <div className="flex items-center justify-between h-16">
//             <div>

//             <button onClick={SideBarToggle} className="order-2 sm:order-1 bg-[#366f36] text-[#fafafa] hover:bg-[#71da71] ml-3 rounded-md w-[40px] h-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center">
//                 <BsList></BsList>
//             </button>
//             </div>
//             <div>
//             <SearchInput />
//             </div>
//             <div className=" order-1 sm:order-2 h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center ">
//                 <span className="font-semibold text-sm">SR</span>
//             </div>
//             </div>
//         </header>
//     );
// }


// import classNames from "classnames";
// import { Dispatch, SetStateAction, useEffect, useState } from "react";
// import { BsList } from "react-icons/bs";
// import dynamic from 'next/dynamic';

// const SearchInput = dynamic(() => import('./SearchInput'), { ssr: false });

// export default function Header({ toggleCollapse, setToggleCollapse }: { toggleCollapse: boolean; setToggleCollapse: Dispatch<SetStateAction<boolean>> }) {
//     const SideBarToggle = () => {
//         setToggleCollapse(!toggleCollapse);
//     };

//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const updateWindowDimensions = () => {
//             setIsMobile(window.innerWidth <= 768);
//         };

//         updateWindowDimensions(); // Call once to set initial value

//         // Add event listener to update isMobile state on window resize
//         window.addEventListener("resize", updateWindowDimensions);

//         // Clean up the event listener when component unmounts
//         return () => {
//             window.removeEventListener("resize", updateWindowDimensions);
//         };
//     }, []);

//     const headerStyle = classNames("fixed bg-[#fcfdff] w-full z-0 px-4 shadow-sm shadow-slate-500/40 ", {
//         ["sm:pl-[20rem]"]: !toggleCollapse,
//         ["sm:pl-[5.6rem]"]: toggleCollapse,
//     });

//     return (
//         <header className={headerStyle}>
//             <div className="flex items-center justify-between h-16">
//                 <div>
//                     {!isMobile ? (
//                         <button onClick={SideBarToggle} className="order-2 sm:order-1 bg-[#366f36] text-[#fafafa] hover:bg-[#71da71] ml-3 rounded-md w-[40px] h-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center">
//                             <BsList />
//                         </button>
//                     ) : (
//                         <div className="order-1 sm:order-2 h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center">
//                             <span className="font-semibold text-sm">SR</span>
//                         </div>
//                     )}
//                 </div>
//                 {!isMobile ? (
//                     <div className="order-1 sm:order-2 h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center">
//                         <span className="font-semibold text-sm">SR</span>
//                     </div>
//                 ) : (
//                     <div className="order-1 sm:order-2">
//                         <button onClick={SideBarToggle} className="order-2 sm:order-1 bg-[#366f36] text-[#fafafa] hover:bg-[#71da71] ml-3 rounded-md w-[40px] h-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center">
//                             <BsList />
//                         </button>
//                     </div>
//                 )}
//                 <div>
//                     <SearchInput />
//                 </div>
//             </div>
//         </header>
//     );
// }

import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
import { BsList } from "react-icons/bs";

export default function Header() {
    const { toggleCollapse, invokeToggleCollapse} = useSideBarToggle();
    const SideBarToggle =() =>{
        invokeToggleCollapse();
    }
    const headerStyle= classNames("fixed bg-[#fcfdff] w-full z-10 px-4 shadow-sm shadow-slate-500/40 ",
    {
        ["sm:pl-[20rem]"]:!toggleCollapse,
        ["sm:pl-[5.6rem]"]:toggleCollapse,
    })
    return (
        <header className={headerStyle}>
            <div className="flex items-center justify-between h-16">
            <button onClick={SideBarToggle} className="order-2 sm:order-1 bg-[#366f36] text-[#fafafa] hover:bg-[#71da71] ml-3 rounded-md w-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center">
                <BsList size={30}></BsList>
            </button>
            <div className=" order-1 sm:order-2 h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center ">
                <span className="font-semibold text-sm">SR</span>
            </div>
            </div>
        </header>
    );
    
}
