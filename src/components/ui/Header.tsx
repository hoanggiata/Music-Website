import Image from "next/image";
export default function Header(){
    return (
        <header className="relative top-0 left-0 right-0 z-50 p-3">
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center rounded-[50%] bg-alpha-bg w-10 h-10 mr-3">
                    <Image src={"/ui/sort_ic_icon.png"} alt="Hamburger Menu" width={20} height={40}></Image>
                </div>
                <div className="flex max-w-[440px] h-9 mr-3 flex-1 bg-alpha p-1 rounded-[83px]">
                    <div className="mr-1 ml-1">
                        <Image src={"/ui/search_icon.png"} className="" alt="Search" width={26} height={20} unoptimized loading="eager"></Image>
                    </div>
                    <input type="text" className="flex-1 bg-transparent" placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."/>
                </div>
                <a href="#" className="rounded-[50%] bg-alpha w-10 h-10">
                    <Image className="rounded-[50%]" src={"/ui/avatar.png"} alt="Avatar icon" width={40} height={0}></Image>
                </a>
            </div>
        </header>
    );
}