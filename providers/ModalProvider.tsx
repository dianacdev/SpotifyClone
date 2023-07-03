"use client";
import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";


import { useEffect, useState } from "react";

//Modals can cause hydration errors! So we are using useEffect to fix this issue!

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    }, [])

    if(!isMounted){
        return null;
    }
    return ( 
        <>
            <AuthModal/>
            <UploadModal/>
        </>
     );
}
 
export default ModalProvider;