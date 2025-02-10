
import Image from "next/image";
export default function NavbarRight() {
  return (
    <aside className="fixed top-0 right-0 w-150 h-screen bg-[#1e2a4a] text-white p-8 shadow-lg">
      <div className="p-2 rounded-lg flex items-center justify-between mb-4">
        <button className="bg-gray-600 text-sm px-3 py-1 rounded-lg mr-4">
          Danh sách phát
        </button>
        <button className="bg-blue-600 text-sm px-3 py-1 rounded-lg">
          Nghe gần đây
        </button>
        <button className="flex justify between text-xl ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            color="#e5e7eb"
            fill="none"
            className="size-5 mr-2 border-0 border-gray-700"
          >
            <path
              d="M12 8V12L13.5 13.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.5454 16.4534C21.1818 17.337 22 17.7789 22 18.5C22 19.2211 21.1818 19.663 19.5454 20.5466L18.4311 21.1484C17.1744 21.827 16.5461 22.1663 16.2439 21.9196C15.504 21.3154 16.6567 19.7561 16.9403 19.2037C17.2277 18.644 17.2225 18.3459 16.9403 17.7963C16.6567 17.2439 15.504 15.6846 16.2439 15.0804C16.5461 14.8337 17.1744 15.173 18.4311 15.8516L19.5454 16.4534Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M13.0261 21.948C12.6888 21.9824 12.3464 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.6849 21.9311 13.3538 21.8 14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <button className="text-xl ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            color="#e5e7eb"
            fill="none"
            className="size-5 mr-2 border-0 border-gray-700"
          >
            <path
              d="M11.9959 12H12.0049"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.9998 12H16.0088"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99981 12H8.00879"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center border-b border-gray-700 pb-2">
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
      <div className="text-sm pt-4">
        <div className="text-sm text-blue-500 font-semibold">Tiếp theo</div>
        <div className="text-sm text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
          Từ PlayList:{" "}
          <b className="text-blue-400 text-sm">Tết 100: Zing Choice</b>
        </div>
      </div>
      <div className="flex items-center border-b border-gray-700 pb-2 pt-4">
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
    </aside>
  );
}
