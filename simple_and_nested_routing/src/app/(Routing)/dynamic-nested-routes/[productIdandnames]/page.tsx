import { notFound } from "next/navigation";
// the import should always be next navigation and rest will workout on itself.
export default async function PreNestedProductDetails({
    params,
}:{
    params:Promise<{productIdandnames:string}>;
}){
    const productIdandnames = (await params).productIdandnames;
    if (parseInt(productIdandnames)>=15){
        notFound();
    }
    return(
        <>
        <h1>We are going to give details about product {productIdandnames}</h1>
        </>
    )
}