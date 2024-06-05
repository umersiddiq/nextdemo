"use client"
import { useState } from "react"

export default function Page(){
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [color,setColor] = useState("");
    const [company,setCompany] = useState("");

    const add = async()=>{
        let data = await fetch("http://localhost:3000/api/product",{
            method:"POST",
            body:JSON.stringify({
                name,
                price,
                category,
                company,
                color
            })
        });
        data = await data.json();
        if(data.success as any)
            alert("new product added");
    }
    return(
        <div>
            <h1>Add New Product</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter mobile name"/>
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter price"/>
            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter category"/>
            <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="Enter color"/>
            <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter company"/>
            <button onClick={add}>Add Product</button>
        </div>
    )
}