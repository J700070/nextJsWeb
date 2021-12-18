import articles from '../data/articles.js'
import Link from 'next/link'

export default function MainPage(){
    return (
        <div className="flex-container">
        <div className="flex-container" > 
            {/* <!-- Abstract -->    */}                 
            <div className="abstract"> 
                <p className="noindent animate__animated animate__slideInDown">Página de J700070. Esta página funciona a modo de cuaderno de notas donde poder escribir y apuntar todo aquello que merece la pena ser escrito. Las matemáticas, la filosofía, la lógica, la economía, los nootrópicos, las finanzas personales o la psicología son algunos temas que espero abordar en mis artículos.</p> 
            </div>       
            {/* <!-- Destacados -->  */}                    
            <section className="flex-fill p-2"> 
                <h3><b>Nuevo</b></h3>
                <ul className="p-2">
                    <li>    
                        <a href="finanzas/backtracking.html">Backtesting de Portfolios</a>      
                        </li> 
                    <li>
                        <a href="drogas/ExpCafeina.html">Experiencias con Cafeína</a> 
                        </li>  
                    <li>
                        <a href="filosofia\freewill.html">Libre Albedrío</a>
                    </li>
                    <li>
                        <a href="file:///C:/Users/Juan%20H/Dropbox/Proyectos/webpage/J700070.github.io/matematicas/Numeros%20perfectos%20y%20amigos.pdf" download="">[PDF] Números Perfectos y Amigos</a>
                    </li>   
                                    
                </ul>                         
            </section> 
            <section className="flex-fill p-2"> 
                <h3><b>Favoritos</b></h3> 
                <ul className="p-2"> 
                    <li>    
                        <a href="finanzas/backtracking.html">Backtesting de Portfolios</a>      
                        </li> 
                    <li>
                        <a href="drogas/ExpCafeina.html">Experiencias con Cafeína</a> 
                        </li>  
                    <li>
                        <a href="logica/falacias1.html">Falacias</a>
                    </li>
                    <li>
                        <a href="file:///C:/Users/Juan%20H/Dropbox/Proyectos/webpage/J700070.github.io/matematicas/Numeros%20perfectos%20y%20amigos.pdf" download="">[PDF] Números Perfectos y Amigos</a>&nbsp;
                    </li>                             
                </ul>                         
            </section>                    
        </div>   
       {/*  <hr className="hrArticles"></hr> */}
        {/* <!--  Artículos -->  */}   
        {/* <section className="flex-fill p-2" style={{width: '50%'}}> 
                    <h3><b>Matemáticas</b></h3> 
                    <ul className="p-2">
                        <li>
                            <a href="matematicas/Numeros perfectos y amigos.pdf" className="button" download=""><i className="fa fa-download"></i>[PDF] Números Perfectos y Amigos</a>&nbsp;
                        </li>
                    </ul>                     
                </section>                 
                <section className="flex-fill p-2" style={{width: '50%'}}> 
                    <h3><b>Filosofía</b></h3> 
                    <ul className="p-2"> 
                        <li>
                            <a href="filosofia\freewill.html">Libre Albedrío</a>
                        </li>                         
                    </ul>                     
                </section>                 
                <section className="flex-fill p-2" style={{width: '50%'}}> 
                    <h3><b>Nootrópicos</b></h3> 
                    <ul className="p-2"> 
                        <li>
                           <a href="drogas/ExpCafeina.html">Experiencias con Cafeína</a> 
                        </li>                         
                    </ul>                     
                </section>
                <section className="flex-fill p-2" style={{width: '50%'}}> 
                    <h3><b>Lógica</b></h3> 
                    <ul className="p-2"> 
                        <li>
                            <a href="logica/falacias1.html">Falacias</a>
                        </li>                         
                    </ul>                     
                </section>   
                <section className="flex-fill p-2" style={{width: '50%'}}> 
                    <h3><b>Finanzas</b></h3> 
                    <ul className="p-2"> 
                        <li>
                            <a href="finanzas/backtracking.html">Backtesting de Portfolios</a>
                        </li>                         
                    </ul>                     
                </section>
                <section className="flex-fill p-2" style={{width: '50%'}}> 
                    <h3><b>Inteligencia Artificial</b></h3> 
                    <ul className="p-2"> 
                            {articles.map((article)=> (
                                <li key={article.id}>
                                <Link href={`/${encodeURIComponent(article.slug)}`}>
                                    <a>{article.title}</a>
                                </Link>
                                </li>    
                            ))}
                                          
                    </ul>                     
                </section> */}
                
        </div>
    )
}