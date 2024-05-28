// // hooks/useWindowSize.tsx
// import { useState, useEffect } from 'react';

// interface WindowSize {
//     width: number;
//     height: number;
// }

// const getDefaultWindowSize = (): WindowSize => ({
//     width: window.innerWidth || 0, // Use 0 as the default width if window.innerWidth is undefined
//     height: window.innerHeight || 0, // Use 0 as the default height if window.innerHeight is undefined
// });

// export default function useWindowSize(): WindowSize {
//     const isClient = typeof window === 'object'; // Check if window object is available

//     const [windowSize, setWindowSize] = useState<WindowSize>(
//         isClient ? getDefaultWindowSize() : { width: 0, height: 0 } // Set default values if not running in the browser
//     );

//     useEffect(() => {
//         if (!isClient) {
//             return; // Exit early if running on server-side
//         }

//         const handleResize = () => {
//             setWindowSize(getDefaultWindowSize()); // Update windowSize with new dimensions
//         };

//         window.addEventListener('resize', handleResize);

//         return () => window.removeEventListener('resize', handleResize);
//     }, [isClient]);

//     return windowSize;
// }
