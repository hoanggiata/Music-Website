"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function PlaylistCard() {
    const [data, setData] = useState([]);
    const pathName = usePathname();
    useEffect(() => {
        if(pathName.includes("/top100")) {
            const fetchData = async () => {
                const respond = await fetch("http://localhost:3000/api/getTop100");
                const result = await respond.json();
                const dataFilter = result.data;
                setData(dataFilter);
            }
            fetchData();
        }
        else{
            const fetchData = async () => {
                const respond = await fetch("http://localhost:3000/api/getHome");
                const result = await respond.json();
                const dataFilter = result.data.items.filter((item) => item.sectionType === "playlist");
                setData(dataFilter);
            }
            fetchData();
        }
        
    },[pathName]);
    
    return (
        <>         
            {data.map((playlist) => (
                <div key={pathName.includes("/top100") ? playlist.title : playlist.sectionId} className="mt-5 pl-7 pr-7">
                    <div className="mb-5 flex justify-between items-center pl-1 pr-1">
                        <h1 className="text-lg font-bold">{playlist.title}</h1>
                        <div className="relative right-0"><a href="/top100" className="text-sm uppercase text-[#FFFFFF80]">{playlist.title === "Top 100" && "Tất cả"}</a></div>
                    </div>
                    <div className={`overflow-x-auto flex flex-nowrap mb-8 w-full h-full container`}>
                        {(pathName.includes("/top100") ? playlist.items : playlist.items.slice(0, 5) ).map((item) => (
                            <div key={item.encodeId} className="flex-none w-1/2 max-w-xs pl-1 pr-1">
                                <div className="rounded-sm overflow-hidden w-full">
                                    <Image src={item.thumbnail} alt="Image Playlist" width={0} height={0} sizes="100vw" quality={100} loading="eager" style={{width: "100%", height: "100%"}} />
                                </div>
                                <div className="mt-3 w-full">
                                    <span className="text-sm truncate block"><a href="#" className="leading-relaxed">{item.title}</a></span>
                                    <div className="text-sm text-[#FFFFFF80] cursor-pointer overflow-hidden leading-normal w-full">
                                        {item.artists.slice(0, 3).map((artist, index) => (
                                            <span key={artist.id} className=""><a href="#" className="">{artist.name}{item.artists.length === 1 ? "" : (index < 2 ? ", " : "" )}</a></span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </>
    );
}
