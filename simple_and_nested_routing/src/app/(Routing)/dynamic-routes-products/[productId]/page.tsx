import { Metadata } from "next"; //for dynamic meta data generation

type Props = {
    params: Promise<{productId:string}>;
}

//Ensure that the name is generateMetadata not Data or anything fishy... it's inbuilt fn()
export const generateMetadata = async({
    params,
}:Props):Promise<Metadata> =>{
    const id = (await params).productId;
    return {
        title:`Product ${id}`, 
    };
}

export default async function ProductDetails({
    params,
}:{
    params: Promise<{productId:string}>;
}){
    const productId = (await params).productId;
    return (
        <>
        <h1>All about this product number {productId}</h1>
        </>
    )
}