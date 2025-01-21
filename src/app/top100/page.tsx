import PlaylistCard from "@/components/PlaylistCard";
import Image from "next/image";
export default function Top100() {
    return (
        <div className="min-h-screen">
            <div className="flex justify-center items-center pl-7 pr-7 mt-10 mb-10">
                <Image src={"/top100.png"} alt="Top 100 Banner" width={0} height={0} sizes="100vw" quality={100} loading="eager" style={{width: "100%", height: "100%"}}></Image>
            </div>      
            <PlaylistCard/>
        </div>
    );
}