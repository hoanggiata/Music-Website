import Image from "next/image";
export default async function LeftAlbum({id}:{id: string}) {
  const respond = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getPlaylistDetail`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id}),
    });
  const result = await respond.json();
  const data = result.data;
  const totalLiked = () => {
    const number = data.like;
    const formattedNumber = Math.round(number / 1000) + 'k'
    return formattedNumber;
  };
  const totalDuration = () => {
    const totalSeconds = data.song.totalDuration;
    const hours = Math.floor(totalSeconds / 3600);
    const remainingSeconds = totalSeconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);

    return `${hours} giờ ${minutes} phút`;

  };
  return (
    <div className="p-6 ml-2 text-center">
      <Image
        src={`${data.thumbnail}`}
        alt="Playlist Cover"
        width={180}
        height={180}
        className="mx-auto rounded-md"
      />
      <h1 className="mt-4 text-xl font-bold">{data.title}</h1>
      <p className="mt-1 text-sm text-gray-400 truncate">
        {data.artistsNames}
      </p>
      <p className="text-xs text-[#FFFFFF80]">{totalLiked()} người yêu thích</p>
      <button className="px-6 py-2 mt-4 text-sm font-semibold text-white bg-blue-600 rounded-full">
        TIẾP TỤC PHÁT
      </button>
      <div className="mt-2 text-center item-center text-[#FFFFFF80]">
        <p className="text-xs">{data.song.total} bài hát</p>
        <p className="text-xs">{totalDuration()}</p>
      </div>
      <p className="mt-2 text-sm text-gray-400">
        Lời tựa:{" "}
        <b className="text-sm text-white">
          {data.sortDescription}
        </b>
      </p>
    </div>
  );
}
