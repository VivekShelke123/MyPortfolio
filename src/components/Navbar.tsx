"use client";

import { useEffect, useState } from "react";

const Navbar = () => {

    const [hide,setHide] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNav = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { 
                setHide(false);
            } else { 
                setHide(true);
            }
            setLastScrollY(window.scrollY);
        }
    }

    useEffect(()=>{
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNav);
            return () => {
                window.removeEventListener('scroll', controlNav);
            };
        }
    },[lastScrollY])

    return (
        <div className={`sticky top-0 z-10 backdrop-blur bg-black bg-opacity-50 transition-transform ${hide ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="text-white flex justify-center p-3 ">
                <ul className="flex list-none space-x-4">
                    <li  className="px-4 cursor-pointer">Home</li>
                    <li  className="px-4 cursor-pointer" >Project</li>
                    <li  className="px-4 cursor-pointer" >About</li>
                    <li  className="px-4 cursor-pointer" >Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
