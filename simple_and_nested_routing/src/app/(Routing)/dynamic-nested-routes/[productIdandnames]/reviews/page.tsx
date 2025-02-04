export default async function DisplayPage({params,}:{
    params:Promise<{productIdandnames:string}>;
}){
    const productIdandnames = (await params).productIdandnames;
    return (
        <h1>This is the product review display for {productIdandnames}</h1>
    )
}