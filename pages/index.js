
import MainPage from '../comps/MainPage.js'
import articles from '../data/articles.js'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
 
        <MainPage/>
        <ul className="p-2"> 
            {articles.map((article)=> (
                <li key={article.id}>
                <Link href={`/posts/${encodeURIComponent(article.slug)}`}>
                    <a>{article.title}</a>
                </Link>
                </li>    
            ))}                   
        </ul>  


    </div>
  )
}
