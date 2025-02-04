export default async function ProductDetails({
    params,
}:{
    params: Promise<{productId:string}>;
}){
    const productId = (await params).productId;
    return (
        <>
        <h1>All about this product number {productId}</h1>;
        </>
    )
}