"use client"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react";
import LoadingCarousel from "@/app/loading/LoadingCarousel";
export default function CarouselComponent() {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                const respond = await fetch("/api/getHome");
                const result = await respond.json();
                const filterCarousel = result.data.items.filter((item) => item.sectionType === "banner");
                if(filterCarousel.length === 0) {return;}
                setData(filterCarousel[0].items);
            } catch (error) {
                console.error("Failed to fetch data from getHome api in CarouselComponent: ",error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    },[]);
    return (
        <>
            {data.length === 0 ? "" :
                <div className="h-[37px] mt-7 pl-7 pr-7">
                        {loading ? <LoadingCarousel/>  :
                        <Carousel 
                        opts={{
                        align: "start",
                        loop: true,
                        }}
                        plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                        ]}>
                        <CarouselContent>
                            {data.map((item) => (                 
                                <CarouselItem key={item.encodeId}><Image src={item.banner} alt="Carousel" width={0} height={0} style={{width: "100%", height: "100%"}} sizes="100vw" loading="eager"></Image></CarouselItem>
                            ))}
                            {/* <CarouselItem><Image src={"/prototype.jpg"} alt="Carousel" width={0} height={0} style={{width: "100%", height: "100%"}} sizes="100vw" loading="eager"></Image></CarouselItem>
                            <CarouselItem><Image src={"/prototype.jpg"} alt="Carousel" width={0} height={0} style={{width: "100%", height: "100%"}} sizes="100vw" loading="eager"></Image></CarouselItem> */}
                        </CarouselContent>
                        </Carousel>}
                </div>
            }
        </>
    );
}

