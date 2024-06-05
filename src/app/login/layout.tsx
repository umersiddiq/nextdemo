import Link from "next/link";
import "./login.css";

export default function Layout({children}:any){
    return(
        <div>
            <h1>Common Layout for login</h1>
            {children}
            <ul className="login-menu">
                <li>
                    <Link href='/'>Go to Login Main</Link>
                </li>
                <li>
                    <Link href='/'>Go to Login inner 1</Link>
                </li>
                <li>
                    <Link href='/'>Go to login inner 2</Link>
                </li>
            </ul>
            
        </div>
    )
}