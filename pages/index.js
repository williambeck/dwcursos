import Head from 'next/head';
import Menu from '../components/Menu';


function Home() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site sobre ..." />
                <meta name="author" content="William - DW" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' /> 
                             
                
                <title>DW - Home</title>
            </Head>
            
            <Menu />

            <section className='top'>
                <div className='max-width'>
                    <div className='top-content'>
                        <div className='text-1'>CURSOS DE TRÂNSITO  </div>
                        <div className='text-2'>EAD 100% Online </div>
                        {/*<div className='text-3'></div><br/>*/}
                        <a href="/cursos">Conheça os nossos cursos</a><br/>
                        <a href="/contato">Matricule-se pelo canais de contato</a>

                    </div>
                </div>
            </section>

            


            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="custom.js"></script>
            

            
        </div>

        
    )
}

export default Home;
