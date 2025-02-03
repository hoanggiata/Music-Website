import Image from "next/image";
export default async function NgheSiCard({id} : {id: string}) {
  const respond = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getPlaylistDetail`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
  const result = await respond.json();
  const data = result.data;
  console.log("artist",data.artists);
  const totalFollow = (follow : number) => {
    const formattedNumber = Math.round(follow / 1000) + 'k'
    return formattedNumber;
  };
  return (
    <div className="p-6 item-center">
      <div className="flex justify-between items-center pb-2 ml-4">
        <p className="text-base font-semibold">Nghệ Sĩ/OA</p>
      </div>
      <div className="flex overflow-x-auto scroll-snap-x-mandatory scroll-snap-align-start gap-6 hide-scrollbar">
        {data.artists.map((artist) => {
          return (
            <div key={artist.id} className="flex-shrink-0 w-1/2 flex flex-col items-center text-center mt-4">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image src={artist.thumbnail} alt="Artist Cover" width={160} height={160} className="object-cover"/>
              </div>
              <div className="rounded-lg px-5 py-4">
                <h2 className="text-sm font-bold">{artist.name}</h2>
                <p className="text-sm text-gray-500">{totalFollow(artist.totalFollow)} người quan tâm</p>
                <button className="px-6 py-2 mt-4 text-sm font-semibold text-white bg-blue-600 rounded-full">
                  Quan tâm
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
