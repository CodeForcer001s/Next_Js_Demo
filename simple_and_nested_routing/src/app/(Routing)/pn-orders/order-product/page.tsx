"use client"
import { useRouter,redirect } from "next/navigation"

export default function OrderProduct(){
    const router = useRouter();
    const handleClick = ()=>{
        console.log("Placing your order");
        // router.push("/"); //this will change to new page
        router.replace("/")
        // router.back or forward
        // redirect("link_here");
    };
    return(
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}
