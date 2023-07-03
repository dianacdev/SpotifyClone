"use client"

import { useRouter } from "next/navigation";
import {twMerge} from 'tailwind-merge';
import {RxCaretLeft, RxCaretRight} from 'react-icons/rx';
import {FiHome} from "react-icons/fi";
import {BiSearch} from 'react-icons/bi';
import {FaUserAlt} from 'react-icons/fa';
import {useSupabaseClient} from "@supabase/auth-helpers-react";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

import Button from "./Button";
import {toast} from "react-hot-toast";


interface HeaderProps{
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({children,className}) => {
    const authModal = useAuthModal();
    const router = useRouter();

    const supabaseClient = useSupabaseClient();
    const { user } = useUser();

    const handleLogout = async ()=>{
        const {error} = await supabaseClient.auth.signOut();
        //TODO: Reset any playing songs
        router.refresh();

        if(error){
            toast.error(error.message);
        }else{
            toast.success('Logged Out!')
        }
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
                    {user?(
                        <div className="flex gap-x-4 items-center">
                            <Button onClick={handleLogout} className="bg-white px-6 py-2 hover:scale-110">
                                Logout!
                            </Button>
                            <Button className="bg-black text-white hover:scale-110" onClick={() => router.push('/account')}>
                                <FaUserAlt/>
                            </Button>
                        </div>
                    ):(
                    <>
                    <div>
                        <Button className="px-6 py-2 bg-transparent text-neutral-400 hover:text-white hover:font-extrabold hover:scale-105"
                            onClick={authModal.onOpen}
                        >
                            Sign up
                        </Button>
                    </div>
                    <div>
                        <Button className="bg-white text-black px-6 py-2 hover:scale-110"
                            onClick={authModal.onOpen}
                        >
                            Log In
                        </Button>
                    </div>
                    </>
                )}
                </div>
            </div>
            {children}
        </div>
    );
}
 
export default Header;