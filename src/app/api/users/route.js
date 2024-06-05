import { NextResponse } from "next/server";
import { user } from "../../../util/db";

export function GET(request){
    const data = user;
    return  NextResponse.json(data,{status:200});
}


export async function POST(request,response){
    let payload = await request.json();
    console.log(payload.name);
    if(!payload.name)
        return NextResponse.json({result:'required field not found'},{status:404})
    return NextResponse.json({result:'new user created',success:true},{status:201})
}