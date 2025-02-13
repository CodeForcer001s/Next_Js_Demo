// Catch all segments and routes


export default async function UrlCatchingandSegmentingDocs({params,}:{
    params:Promise<{slug:string[]}>;
}){

    // To make the page load intentionally late to display the loading.tsx
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("intentional delay");
        },2000);
    })
    const {slug} = await params;
    if(slug?.length===2){
        return(
            <h1>
                We are going to seee how to do the {slug[0]} for the framework {slug[1]}
            </h1>
        );
    }else if(slug?.length===1){
        return <h1>Viewing the docs for the process of {slug[0]}</h1>
    }
    return <h1>Docs home Page there macha</h1>
}

// the double array wrapper on slugs is used to render the final return incase nothing works out.