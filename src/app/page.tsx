import CarouselComponent from "@/components/CarouselComponent";
import NewRelease from "@/components/NewRelease/NewRelease";
import PlaylistCard from "@/components/PlaylistCard";

export default async function Home() {
  return (
    <div className="min-h-screen">
      <CarouselComponent/>
      <NewRelease/>
      <PlaylistCard/>
    </div>
  );
}
