import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    
    const router = useRouter();

    useEffect(() => {
        setTimeout(()=>{
            router.push("/");
        },3000);
    });

    return ( 
        <div className="not-found">
            <h1>Oooopps!</h1>
            <h4>Page not found.</h4>
            <p>Back to <Link href="/">Home Page</Link></p>
        </div>
     );
}
 
export default NotFound;