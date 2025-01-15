import Image from "next/image";
export default async function PlaylistCard() {
    const respond = await fetch("http://localhost:3000/api/getHome");
    const result = await respond.json();
    const data = result.data.items.filter((item) => item.sectionType === "playlist");
    return (
        <>
            {data.map((playlist) => (
                <div key={playlist.sectionId} className="mt-5 pl-7 pr-7">
                    <div className="mb-5">
                        <h1 className="text-lg font-bold">{playlist.title}</h1>
                    </div>
                    <div className="overflow-x-auto flex flex-nowrap mb-8 w-full h-full container">
                        {playlist.items.map((item) => (
                            <div key={item.encodeId} className="flex-none w-1/2 max-w-xs pl-1 pr-1">
                                <div className="rounded-sm overflow-hidden w-full">
                                    <Image src={item.thumbnail} alt="Image Playlist" width={0} height={0} sizes="100vw" quality={100} loading="eager" style={{width: "100%", height: "100%"}} />
                                </div>
                                <div className="mt-3 w-full">
                                    <span className="text-sm"><a href="#" className="leading-relaxed">{item.title}</a></span>
                                    <div className="text-sm text-[#FFFFFF80] cursor-pointer overflow-hidden leading-normal w-full">
                                        {item.artists.slice(0, 4).map((artist, index) => (
                                            <span key={artist.id}><a href="#">{artist.name}{index < 3 ? ", " : ""}</a></span>
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