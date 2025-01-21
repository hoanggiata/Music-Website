"use client";
import Image from "next/image";
export default function LeftAlbum() {
  return (
    <div className="p-6 ml-2 text-center">
      <Image
        src="/image/albummusic.jpg"
        alt="Playlist Cover"
        width={160}
        height={160}
        className="mx-auto rounded-md"
      />
      <h1 className="mt-4 text-xl font-bold">Tết 100: Zing Choice</h1>
      <p className="mt-1 text-sm text-gray-400">
        Bích Phương, Hồ Ngọc Hà, Noo Phước Thịnh, Đức Phúc
      </p>
      <p className="text-xs text-gray-500">33K người yêu thích</p>
      <button className="px-6 py-2 mt-4 text-sm font-semibold text-white bg-blue-600 rounded-full">
        TIẾP TỤC PHÁT
      </button>
      <div className="mt-2 text-center item-center">
        <p className="text-xs text-gray-500">100 bài hát</p>
        <p className="text-xs text-gray-500">6 giờ 24 phút</p>
      </div>
      <p className="mt-2 text-sm text-gray-400">
        Lời tựa:{" "}
        <b className="text-sm text-white">
          Nhạc Tết dành cho mọi nhà, chọn lọc bởi Zing MP3
        </b>
      </p>
    </div>
  );
}
