"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {

    const [hide, setHide] = useState(true);
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

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNav);
            return () => {
                window.removeEventListener('scroll', controlNav);
            };
        }
    }, [lastScrollY])

    return (
        <div className={`sticky top-0 backdrop-blur bg-black bg-opacity-50 transition-transform ${hide ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="text-white flex justify-center p-3 ">
                <ul className="flex list-none space-x-4">
                    <Link href={'#Home'} className="px-4 cursor-pointer hover:text-shadow-glow">Home</Link>
                    <Link href={'#About'} className="px-4 cursor-pointer hover:text-shadow-glow">About</Link>
                    <Link href={'#Project'} className="px-4 cursor-pointer hover:text-shadow-glow">Project</Link>
                    <Link href={'#Contact'} className="px-4 cursor-pointer hover:text-shadow-glow">Contact</Link>               
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
