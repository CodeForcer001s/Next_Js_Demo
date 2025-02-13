import Link from "next/link"
export default async function NewsArticle({
    params,
    searchParams,
}:{
    params:Promise<{articleId:string}>;
    searchParams: Promise<{lang?:"en"|"es"|"fr"}>;
}){

    const {articleId} = await params;
    const {lang="en"} = await searchParams; //the default language is being set to english
    return(
        <div>
            <h1>News Article {articleId}</h1>
            <p>Reading in language {lang}</p>

            <div>
                <Link href={`/sq-articles/${articleId}?lang=en`}>English </Link>
                <Link href={`/sq-articles/${articleId}?lang=es`}>Spanish </Link>
                <Link href={`/sq-articles/${articleId}?lang=fr`}>French </Link>
            </div>
        </div>
    )
}