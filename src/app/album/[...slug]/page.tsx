import LeftAlbum from "@/components/AlbumPage/LeftAlbum"
import MusicAlbumCard from "@/components/AlbumPage/MusicAlbumCard"
import NgheSiCard from "@/components/AlbumPage/NgheSiCard"
export default async function Album({params}:{params: {slug: string[]}}) {
    const filterId = params.slug[1].replace(".html", "");
    return (
        <main className="min-h-screen bg-layout text-white relative flex flex-col overflow-hidden">
            <LeftAlbum id={`${filterId}`}/>
            <MusicAlbumCard id={`${filterId}`}/>
            <NgheSiCard id={`${filterId}`}/>
        </main>
    )
}