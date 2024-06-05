import Link from "next/link";
"use client"
export default function Student({params}:any){
    return(
        <div>
            <h1>StudentDetails</h1>
            <h3>Name : {params.student}</h3>
        </div>
    )
}


// code for Static Site Generation (SSG)
// export function generateStaticParams(){
//     return "";
// }