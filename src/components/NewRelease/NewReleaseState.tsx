"use client"
import Image from "next/image";
import { useState } from "react";
export default function NewReleaseState({data}) {
    const [dataType,setDataType] = useState("all");
    const handleOnClick = (type) => {
        setDataType(type);
    }
    const getDuration = (time) => {
        const min = Math.floor(time / 60);
        const seconds = time - min * 60;
        return `${min}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }
    const renderContent = () =>{
        switch (dataType) {
            case "all":
                return (
                    <div className="mt-7">
                        {data.all.slice(0,13).map((item) => (
                            <div key={item.encodeId} className="flex flex-col">
                                <div className="flex p-3">
                                    <div className="w-[60px] h-[60px]">
                                        <Image className="rounded-md" src={item.thumbnailM} width={0} height={0} sizes="100vw" quality={100} loading="eager" style={{width: "100%", height: "100%"}} alt="Image Song" ></Image>
                                    </div>
                                    <div className="pl-3 pr-3">
                                        <h1 className=" text-sm mb-1">{item.title}</h1>
                                        <div className="text-xs mb-1 text-[#FFFFFF80]"><a href="#">{item.artistsNames}</a></div>
                                        <div className="text-xs text-[#FFFFFF80]">{getDuration(item.duration)}</div>
                                    </div>
                                </div>                   
                            </div>
                        ))}
                    </div>
                );
            case "vPop":
                return (
                    <div className="mt-7">
                        {data.vPop.slice(0,13).map((item) => (
                            <div key={item.encodeId} className="flex flex-col">
                                <div className="flex p-3">
                                    <div className="w-[60px] h-[60px]">
                                        <Image className="rounded-md" src={item.thumbnailM} width={0} height={0} sizes="100vw" quality={100} loading="eager" style={{width: "100%", height: "100%"}} alt="Image Song" ></Image>
                                    </div>
                                    <div className="pl-3 pr-3">
                                        <h1 className=" text-sm mb-1">{item.title}</h1>
                                        <div className="text-xs mb-1 text-[#FFFFFF80]"><a href="#">{item.artistsNames}</a></div>
                                        <div className="text-xs text-[#FFFFFF80]">{getDuration(item.duration)}</div>
                                    </div>
                                </div>                   
                            </div>
                        ))}
                    </div>
                );
            case "others":
                return (
                    <div className="mt-7">
                        {data.others.slice(0,13).map((item) => (
                            <div key={item.encodeId} className="flex flex-col">
                                <div className="flex p-3">
                                    <div className="w-[60px] h-[60px]">
                                        <Image className="rounded-md" src={item.thumbnailM} width={0} height={0} sizes="100vw" quality={100} loading="eager" style={{width: "100%", height: "100%"}} alt="Image Song" ></Image>
                                    </div>
                                    <div className="pl-3 pr-3">
                                        <h1 className=" text-sm mb-1">{item.title}</h1>
                                        <div className="text-xs mb-1 text-[#FFFFFF80]"><a href="#">{item.artistsNames}</a></div>
                                        <div className="text-xs text-[#FFFFFF80]">{getDuration(item.duration)}</div>
                                    </div>
                                </div>                   
                            </div>
                        ))}
                    </div>
                );
            default: 
                return (
                    <div className="mt-7">
                        {data.all.slice(0,13).map((item) => (
                            <div key={item.encodeId} className="flex flex-col">
                                <div className="flex p-3">
                                    <div className="w-[60px] h-[60px]">
                                        <Image className="rounded-md" src={item.thumbnailM} width={0} height={0} sizes="100vw" quality={100} loading="eager" style={{width: "100%", height: "100%"}} alt="Image Song" ></Image>
                                    </div>
                                    <div className="pl-3 pr-3">
                                        <h1 className=" text-sm mb-1">{item.title}</h1>
                                        <div className="text-xs mb-1 text-[#FFFFFF80]"><a href="#">{item.artistsNames}</a></div>
                                        <div className="text-xs text-[#FFFFFF80]">{getDuration(item.duration)}</div>
                                    </div>
                                </div>                   
                            </div>
                        ))}
                    </div>
                );
        }
    }
    return (
        <div className="">
            <div className="text-xs flex gap-2">
                <button className={`${dataType === "all" && "bg-[#3560F5] border-[#3560F5] "} pl-3 pr-3 pt-2 pb-2 border rounded-full  uppercase w-[90px]`} onClick={() => handleOnClick("all")}><p>Tất cả</p></button>
                <button className={`${dataType === "vPop" && "bg-[#3560F5] border-[#3560F5] "} pl-3 pr-3 pt-2 pb-2 border rounded-full  uppercase w-[90px]`} onClick={() => handleOnClick("vPop")}><p>Việt Nam</p></button>
                <button className={`${dataType === "others" && "bg-[#3560F5] border-[#3560F5] "} pl-3 pr-3 pt-2 pb-2 border rounded-full  uppercase w-[90px]`} onClick={() => handleOnClick("others")}><p>Quốc tế</p></button>
            </div>           
            {renderContent()}
        </div>
    );
}