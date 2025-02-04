"use client"
// if we use this use client however, we will not be able to define or work with metadata generation as it's disallowed 
// so keep the client side in a different component and use the server side work in a different component...
// this is the page where it was moved to...
import {useState} from "react";

export default function Counter(){
    const [count,setCount] = useState(0);
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={()=> setCount(count+1)}>Incrementals</button>
        </div>
    )
}