"use client"
export default function Product(props:any){
    return(
        <div>
            <button onClick={()=>alert(props.price)}>Use Me</button>
        </div>
    )
}