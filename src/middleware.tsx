import { NextResponse } from "next/server";

export function middleware(request:any){

    //if(request.nextUrl.pathname!="/login")
        return NextResponse.redirect(new URL("/login",request.url))
}

export const config={
    matcher:["/about/:path*"]
    //matcher:["/about/:path*","/study/:path*"]
}