"use client";
import Image from "next/image";
export default function NgheSiCard() {
  return (
    <div className="p-6 item-center">
      <div className="flex justify-between items-center pb-2 ml-4">
        <p className="text-base font-semibold">Nghệ Sĩ/OA</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col items-center text-center mt-4">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <Image src="/image/artist.jpg" alt="Artist Cover" width={160}  height={160} className="object-cover"/>
          </div>
          <div className="rounded-lg px-5 py-4">
            <h2 className="text-sm font-bold">Hồ Ngọc Hà</h2>
            <p className="text-sm text-gray-500">423k người quan tâm</p>
            <button className="px-6 py-2 mt-4 text-sm font-semibold text-white bg-blue-600 rounded-full">
              Quan tâm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
