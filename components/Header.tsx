"use client"

import { useRouter } from "next/navigation";
import {twMerge} from 'tailwind-merge';
import {RxCaretLeft, RxCaretRight} from 'react-icons/rx';
import {FiHome} from "react-icons/fi";
import {BiSearch} from 'react-icons/bi';
import Button from "./Button";

interface HeaderProps{
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({children,className}) => {
    const router = useRouter();
    const handleLogout = ()=>{
        //Handle logout
    }

    return (
        <div className={twMerge(`h-fit bg-gradient-to-b from-indigo-900 p-6`, className)}>
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">

                    <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
                            onClick={() => router.back()}
                    >
                        <RxCaretLeft size={32} className="text-white"/>
                    </button>
                    <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
                            onClick={() => router.forward()}
                    >
                        <RxCaretRight size={32} className="text-white"/>
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <FiHome size={26} className="text-black"/>
                    </button>
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <BiSearch size={26} className="text-black"/>
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <>
                    <div>
                        <Button className="px-6 py-2 bg-transparent text-neutral-400 hover:text-white hover:font-extrabold hover:scale-105"
                            onClick={()=>{}}
                        >
                            Sign up
                        </Button>
                    </div>
                    <div>
                        <Button className="bg-white text-black px-6 py-2 hover:scale-110"
                            onClick={()=>{}}
                        >
                            Log In
                        </Button>
                    </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    );
}
 
export default Header;