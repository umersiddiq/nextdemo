'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Profile from "../../public/vercel.svg";

export default function Home() {
  const [name,setName] = useState("Umer");

  const apple=(item:any)=>{
    setName("Ali")
  }

  const router = useRouter();

  const InnerComp=()=>{
    return(
      <h1>This is inner comp</h1>
    )
  }
  return (
    <main className={styles.main}>
      <h1>Wellcome page {name}</h1>
      <Image
      src={Profile}
      alt="vercel"
      />
      <button onClick={()=>apple('color')}>ponka</button>
      <Link href="/login">Go to login page</Link>
      <Link href="/about">Go to about page</Link>
      <Link href="/productlist">Go to product page</Link>
      <button onClick={()=>router.push("/login")}>Go to login page</button>
      <InnerComp/>
      <Users name={"Umer"}/>
    </main>
  );
}


const Users=(props:any)=>{
  return(
    <div>
      <h1>User name is {props.name}</h1>
    </div>
  )
}