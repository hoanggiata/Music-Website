import { NextResponse } from "next/server";
import { ZingMp3 } from "zingmp3-api-full";
export async function GET(){
    try {
        const respond = await ZingMp3.getHome();
        if(respond.msg === "Success"){
            return NextResponse.json(respond, {status: 200});
        }else { return NextResponse.json("No data received from server", { status: 500 }); }
    } catch (error) {
         return NextResponse.json({ error: error.message }, { status: 500 })
        };
}