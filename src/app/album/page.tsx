import LeftAlbum from "@/components/AlbumPage/LeftAlbum"
import MusicAlbumCard from "@/components/AlbumPage/MusicAlbumCard"
import NgheSiCard from "@/components/AlbumPage/NgheSiCard"
import * as React from "react"

export default function Album() {
    return (
        <main className="min-h-screen bg-layout text-white relative flex flex-col overflow-hidden">
            <LeftAlbum/>
            <MusicAlbumCard/>
            <NgheSiCard/>
        </main>
    )
}