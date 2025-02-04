export default async function ReviewDisplaying({params,}:{
    params:Promise<{productIdandnames:string;reviewId:string}>;
}){
    // const reviewId = (await params).reviewId;
    // const productId = (await params).productId; wrong way to call on those 2
    const {productIdandnames,reviewId} = await params;
    return (
        <h1>the product is {productIdandnames} and review is {reviewId}</h1>
    );
}