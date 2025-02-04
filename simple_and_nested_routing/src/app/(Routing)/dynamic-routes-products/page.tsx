import Link from "next/link"

export default function ProductList(){
    // To simulate the working of an external api integrating here
    const productId = 100;
    return(
        <>
        <Link href="/counter-CSRmd/counter">Counter Page</Link>
        {/* Giving the global working link from the root is imp */}
        <h1>
            Product Lists
        </h1>
        <h2><Link href="/dynamic-routes-products/1">Product 1</Link></h2>
        <h2><Link href="/dynamic-routes-products/2">Product 2</Link></h2>
        <h2><Link href="/dynamic-routes-products/3">Product 3</Link></h2>
        <h2><Link href={`/dynamic-routes-products/${productId}`} replace>Product {productId}</Link></h2>
        </>
    )
}
// Instead of creating a folder for every product, we'd much rather use dynnamic routes here.
// Also use global link