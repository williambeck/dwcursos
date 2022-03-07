import Head from 'next/head';
import Menu from '../components/Menu';

function Home() {
    return (
        <div>
            <Head>
                <title>DW - RECICLAGEM PARA CONDUTORES INFRATORES</title>
                
            </Head>

            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' /> 
            
            <Menu />

            <div className='reciclagem'><br></br><br></br><br></br><br></br><br></br><br></br>
            <h1>CURSO DE RECICLAGEM PARA CONDUTORES INFRATORES</h1><br></br>
            <p>Se você foi notificado pelo DETRAN por ter atingido 20 ou mais pontos ativos em sua Carteira Nacional de Habilitação, e terá a sua CNH e o direito de dirigir suspensos. Além de cumprir o tempo determinado da penalidade de suspensão, você ainda deverá fazer o Curso de Reciclagem para Condutores Infratores, ofertado por Instituição devidamente reconhecida pelo Detran.</p><br></br>
            <p>Curso Rápido - 30hs/aula</p> <br/>
            <p>Conclua de 5 a 60 dias - sem sair de casa</p><br/>
            <p>Conclua de 5 a 60 dias - sem sair de casa</p><br/>
            <p>Condições Especiais - Parcele em até 6xsem juros</p><br/>
            <p>Multiplataforma -Assista de qualquer dispositivo e quando quiser</p><br/>
            </div>
            
            <div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="custom.js"></script>
            </div>




        </div>
    )
}

export default Home;