import { NextResponse } from "next/server";
import { user } from "../../../../util/db";

export function GET(request,content){
    const data = user[content.params.id - 1];
    return  NextResponse.json(data,{status:200});
}