"use client"
import Link from "next/link";
import Script from "next/script";

export default async function Users(){
    let data = await getUsers();
    return(
        <div>
            <h1>Current Location Component</h1>
            <Script
            src="/location.js"
            onLoad={()=>{
                console.log("file loaded")
            }}/>
            {
                data.map((item:any)=>(
                    <div>
                    <Link href={`/users/${item.id}`}>Username : {item.name}</Link>
                    </div>
                ))
            }
            
        </div>
    )
}

 async function getUsers() {
        let data = await fetch("http://localhost:3000/api/users");
        data = await data.json();
        return data;
}