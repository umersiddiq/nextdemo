import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight:'100',
    subsets:['latin'],
    display:'swap'
})
export default function StudentList(){
    return(
        <div>
            <h1 className={roboto.className}>StudentList Component</h1>
            <ul>
                <li><Link href="/studentlist/umer">Umer</Link></li>
                <li><Link href="/studentlist/ali">Ali</Link></li>
                <li><Link href="/studentlist/usman">Usman</Link></li>
                <li><Link href="/studentlist/abdullah">Abdullah</Link></li>
            </ul>
        </div>
    )
}


export function generateMetaData(){
    return{
        title:"Student List Page",
        description:"student list description"
    }
}