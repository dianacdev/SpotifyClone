"use client";

import qs from 'query-string';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useDebounce from "@/hooks/useDebounce";
import Input from './Input';

const SearchInput = () => {
    const router = useRouter()
    const [value, setValue] = useState<string>('');
    const debouncedValue = useDebounce<string>(value, 500);

    useEffect(()=>{
        const query = {
            title: debouncedValue,
        }

        const url = qs.stringifyUrl({
            url:'/search',
            query: query
        })
        router.push(url)
    },[debouncedValue, router])

    return ( 
        <Input placeholder='What do you want to listen to ?'
            className='outline-none bg-neutral-800 rounded-full focus:outline-white drop-shadow-lg hover:bg-zinc-800 hover:outline-zinc-700'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
     );
}
 
export default SearchInput;