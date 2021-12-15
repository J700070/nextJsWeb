import Head from 'next/head'
import Image from 'next/image'
import j7Image from '../public/J7 White.png'
import articles from '../data/articles.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>J700070s Page</title>         
        {/* <!-- Latest compiled and minified CSS -->   */}       
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
               
        
      </Head>

      <main>
        <div className="row p-4" style={{height: '100%', width:'100%'}}>
            <div className="col-2" ></div>             
            {/* <!-- SideBar -->    */}          
            <div className="col-1" style={{fontVariant: 'small-caps'}} > 
                <Image alt="" src={j7Image} style={{width: '90%'}}/>
                <a href="#">Main Page</a>
                <hr></hr>
                <a href="aboutMe/aboutMe.html">Sobre mí</a>  
                <br></br>
                <a href="https://www.goodreads.com/user/show/87370928-cosa-cosa-cosa-cosa">Goodreads</a> 
                <br></br>
                <a href="https://github.com/J700070">Github</a> 
            </div>             
            {/* <!-- Center Column-->  */}            
            <div className="col-6 flex-container" > 
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
                             
                <hr className="hrArticles"></hr>
                {/* <!--  Artículos -->  */}   
                <section className="flex-fill p-2" style={{width: '50%'}}> 
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
                            // eslint-disable-next-line react/jsx-key
                            <li>
                            {article.title}
                            </li>
                          ))}                       
                    </ul>                     
                </section>  
                              
            </div>             
            <div className="col-3" >
                
            </div>
        </div> 
      </main>

    </div>
  )
}
