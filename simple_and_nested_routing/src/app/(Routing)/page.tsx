import Link from "next/link";
export default function Home(){
    return (
        <>
    <h1>Welcome to main page of demo app </h1>
    <Link href="/params-blog">Blog</Link>
    <Link href="/params-products">Products in blog</Link>
    <Link href="/sq-articles/breaking-news-123?lang=en">Read in English</Link>
    <Link href="/sq-articles/breaking-news-123?lang=fr">Read in French</Link>

        </>
    );

}