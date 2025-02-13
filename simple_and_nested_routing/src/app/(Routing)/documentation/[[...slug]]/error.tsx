"use client"

export default function ErrorTsX({error}:{error: Error}){
    return <div>{error.message}</div>
}

// boundaries are always client components
// ofcourse this will be needed to be called in it's own way