import '../styles/globals.css'
import j7Image from '../public/J7 White.png'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (<>
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
              <Link href={'/'}>
                    <a>Main Page</a>
              </Link>
              <hr></hr>
              <a href="aboutMe/aboutMe.html">Sobre mí</a>  
              <br></br>
              <a href="https://www.goodreads.com/user/show/87370928-cosa-cosa-cosa-cosa">Goodreads</a> 
              <br></br>
              <a href="https://github.com/J700070">Github</a> 
            </div>             
            {/* <!-- Center Column-->  */}            
            <div className="col-6 flex-container" > 
              <Component {...pageProps} />
            </div>             
            <div className="col-3" >
            </div>
        </div>
    </main>
    </>
  )
}

export default MyApp
