import Head from 'next/head';
import Menu from '../components/Menu';


function Home() {
    return (
        <div>
            <Head>
                <title>DW - Sobre</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' />
            </Head>
            <Menu />
            
            <body className='sobre'> 
            <div className=''><br></br><br></br><br></br><br></br><br></br><br></br>
                <h2>Quem Somos !!!</h2><br></br><br></br><br></br><br></br><br></br><br></br>
                <p>A DW Treinamentos é uma empresa jovem com o objetivo simples de levar ate seus clientes um serviço seguro com qualidade e excelência desde o primeiro contato.
                Somos uma empresa q preza pela segurança agilidade e modernidade dos nossos produtos, <br/>Oferedemos todo o suporte necessário para que você, cliente ou parceiro tenha a melhor experiência conosco.
                Oferecemos cursos regulamentados pela legislação atualizados periodicamente oque garante a qualidade e legitimidade do nosso repertório de cursos que vão desde cursos de reciclagem p motoristas do dia a dia ate o profissional de cargas pesadas vivas ou perigosas.
                <br></br>Venha conhecer a D&W Treinamentos, aqui você encontra o curso que vc precisa.</p>
                
            </div>    
            
            </body>

            <div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="custom.js"></script>
            </div>

        </div>
    )
}

export default Home;