import { NextResponse } from "next/server";
import { ZingMp3 } from "zingmp3-api-full";

export async function POST(req: Request) {
    try {
        // Parse the request body to get the playlist ID
        const data = await req.json();
        // Check if the ID is provided
        if (!data) {return NextResponse.json({ error: "No id received from client" }, { status: 400 });}
        // Fetch the playlist details from ZingMp3 API
        
        const response = await ZingMp3.getDetailPlaylist(data.id.toString());

        // Check if the response is successful
        if (response.msg === "Success") {
            return NextResponse.json(response, { status: 200 });
        } else {
            return NextResponse.json({ error: "No data received from server" }, { status: 500 });
        }
    } catch (error) {
        // Handle any errors that occur during the process
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}