import CarouselComponent from "@/components/CarouselComponent";
import NavbarLeft from "@/components/navbarleft";
import NewRelease from "@/components/NewRelease/NewRelease";
import PlaylistCard from "@/components/PlaylistCard";

export default async function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="hidden lg:block top-0left-0 bottom-0">
        <NavbarLeft />
      </div>
      <main className="lg:ml-64 p-2">
        <CarouselComponent />
        <NewRelease />
        <PlaylistCard />
      </main>
    </div>
  );
}
