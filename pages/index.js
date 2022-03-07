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
                               
                
                <title>DW - Home</title>
            </Head>
            
            <Menu />

            <section className='top'>
                <div className='max-width'>
                    <div className='top-content'>
                        <div className='text-1'>Cursos 100% Online </div>
                        <div className='text-2'>testando 2</div>
                        <div className='text-3'>entre em contato conosco</div>
                        <a href="/contato">entrar em contato</a>

                    </div>
                </div>
            </section>

            


            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="custom.js"></script>
            

            
        </div>

        
    )
}

export default Home;
