"use client";
import { useState } from "react";
import Image from "next/image";
import NavbarLeft from "../navbarleft";
export default function Header(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <>
        <header className="relative top-0 left-0 right-0 z-50 p-3">
            <div className="flex justify-between items-center">
                <button className="flex justify-center items-center rounded-[50%] bg-alpha-bg w-10 h-10 mr-3" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <Image src={"/ui/sort_ic_icon.png"} alt="Hamburger Menu" width={20} height={40}></Image>
                </button>
                <div className="flex max-w-[440px] h-9 mr-3 flex-1 bg-alpha p-1 rounded-[83px]">
                    <div className="mr-1 ml-1">
                        <Image src={"/ui/search_icon.png"} className="" alt="Search" width={26} height={20} unoptimized loading="eager"></Image>
                    </div>
                    <input type="text" className="flex-1 bg-transparent" placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."/>
                </div>
                <a href="#" className="rounded-[50%] bg-alpha w-10 h-10">
                    <Image className="rounded-[50%]" src={"/ui/avatar.png"} alt="Avatar icon" width={40} height={0}></Image>
                </a>
            </div>
        </header>
        {isSidebarOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsSidebarOpen(false)}/>
        )}
        <div className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-[#111c44] to-[#081229] text-white transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
            <NavbarLeft/>
        </div>
        </>
    );
}