"use client";

import { usePathname } from "next/navigation";

export default function NotFound(){
    const pathname=usePathname();
    const productId = pathname.split("/")[2];
    return (
        <div>
            <h2>Step bro is trying to search for Product Id {productId} i think</h2>
            <p>This doesn't work</p>
        </div>
    );
}


// if i want the page to be a lil more dynamic then i'll need to convert it to a client page...