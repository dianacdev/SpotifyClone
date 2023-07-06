'use client';

import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModel";

import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import MediaItem from "./MediaItem";

interface LibraryProps{
    songs: Song[]
}

const Library: React.FC<LibraryProps> = ({songs}) => {
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const {user} = useUser();
    const onClick = () =>{
        if(!user){
            return authModal.onOpen();
        }

        //TODO: Check for Subscription
        
        return uploadModal.onOpen();
    }
    return ( 
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2 group ">
                    <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className='fill-neutral-400 group-hover:fill-white'><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
                    <p className="text-neutral-400 font-bold text-md group-hover:text-white">Your Library</p>
                </div>
                <div className=" hover:rounded-full hover:bg-neutral-800 w-[28px] h-[28px] items-center flex justify-center">
                    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className='fill-neutral-400 cursor-pointer transition hover:fill-white' onClick={onClick}><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
                </div>
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
                {songs.map((item) => (
                    <MediaItem 
                        onClick={() => {}}
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default Library;

