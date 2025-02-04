// if we use this use client however, we will not be able to define or work with metadata generation as it's disallowed 
// so keep the client side in a different component and use the server side work in a different component...


import Counter from "./counter"

export const metadata={
    title:`Counted here`
}

export default function CounterPage(){
    return (
        <Counter/>        
    )
}