"use client";
import Image from "next/image";
export default function MusicAlbumCard() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center border-b border-gray-700 pb-2 ml-4">
        <p className="text-sm font-semibold text-gray-400">Bài hát</p>
        <p className="text-sm font-semibold text-gray-400">Thời gian</p>
      </div>
      <div className="mt-2">
        <div className="flex items-center py-3 px-4 ">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-3.5 mr-2 text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
              />
            </svg>
            <Image
              src="/image/musiccard.jpg"
              alt="Music Cover"
              width={50}
              height={50}
              className="rounded-md flex-shrink-0"
            />
            <div className="ml-6">
              <p className="font-semibold text-sm">Tết ổn rồi</p>
              <p className="text-xs text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
                Bùi Công Nam, Jun Phạm
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-400 ml-auto text-right">3:00</p>
        </div>
      </div>
    </div>
  );
}
