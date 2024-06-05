"use client"

import { METHODS } from "http";
import { useState } from "react"

export default function AddUser(){
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");

    const addUser = async()=>{
        let response = await fetch("http://localhost:3000/api/users",{
            method:'POST',
            body:JSON.stringify({name,age,email})
        }); 
        response = await response.json();
        if(response.success){
            alert("new user created")
        }
        else
            alert("there is an error in data");
    }
    return(
        <div>
            <h1>Add New User</h1>
            <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} style={{display:'block', margin:4 }}/>
            <input type="text" placeholder="Enter age" value={age} onChange={(e)=>setAge(e.target.value)} style={{display:'block' , margin:4}}/>
            <input type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{display:'block', margin:4 }}/>
            <button type="submit" onClick={addUser}>Save</button>
        </div>
    )
}