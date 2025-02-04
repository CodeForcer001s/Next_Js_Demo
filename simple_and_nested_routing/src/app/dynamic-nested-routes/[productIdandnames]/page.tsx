export default async function PreNestedProductDetails({
    params,
}:{
    params:Promise<{productIdandnames:string}>;
}){
    const productIdandnames = (await params).productIdandnames;
    return(
        <>
        <h1>We are going to give details about product {productIdandnames}</h1>
        </>
    )
}