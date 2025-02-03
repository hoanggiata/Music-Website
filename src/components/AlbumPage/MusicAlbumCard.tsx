import Image from "next/image";
export default async function MusicAlbumCard({id}:{id: string}) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getPlaylistDetail`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
});
  const result = await response.json();
  const data = result.data.song.items;
  return (
    <div className="p-6">
      <div className="flex justify-between items-center border-b border-gray-700 pb-2 ml-4">
        <p className="text-sm font-semibold text-gray-400">Bài hát</p>
        <p className="text-sm font-semibold text-gray-400">Thời gian</p>
      </div>
      {data.map((song) => {
        return (
        <div className="mt-2" key={song.encodeId}>
          <div className="flex items-center py-3 px-4 ">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3.5 mr-2 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                />
              </svg>
              <Image
                src={song.thumbnail}
                alt="Music Cover"
                width={50}
                height={50}
                className="rounded-md flex-shrink-0"
              />
              <div className="ml-6">
                <p className="font-semibold text-sm truncate max-w-[200px]">{song.title}</p>
                <p className="text-xs text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis truncate">
                  {song.artists.map((artist) => artist.name).join(", ")}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 ml-auto text-right">3:00</p>
          </div>
        </div>
        );
      })}
    </div>
  );
}
