import Head from 'next/head';
import Menu from '../components/Menu';

function Home() {
    return (
        <div>
            <Head>
                <title>DW - CONDUTORES DE VEÍCULO DE TRANSPORTE COLETIVO DE PASSAGEIROS</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' /> 
            </Head>
            <Menu />

            <div className='cursos'><br></br><br></br><br></br><br></br><br></br><br></br>
                <h1>CONDUTORES DE VEÍCULO DE TRANSPORTE COLETIVO DE PASSAGEIROS</h1><br/>
                <p> O curso para CONDUTORES DE VEÍCULO DE TRANSPORTE COLETIVO DE PASSAGEIROS, é totalmente em EAD (Ensino a distância). O curso é voltado aos condutores que queiram regularizar a sua profissão e para os que pretendem exercê-la, o curso é de 50 h/aula e conta com um material didático voltado para a atividade.</p><br/>
                <p>Uma nova oportunidade profissional para você motorista! </p>
                <p>TRANSPORTE PASSAGEIROS com segurança e eficiência!</p>
                <p>Curso Rápido - 50hs/aula</p>
                <p>Conclua de 7 a 60 dias - sem sair de casa</p>
                <p>Celular, tablet ou computador - Assista e estude de qualquer dispositivo, basta ter acesso a internet.</p><br/>
                <p>Quem pode fazer?</p><br/>
                <p>– Ser maior de 21 anos;– Estar habilitado, no mínimo, na categoria “D”;– Não estar cumprindo pena de suspensão do direito de dirigir, cassação da Carteira Nacional de Habilitação – CNH, pena decorrente de crime de trânsito, bem como não estar impedido judicialmente de exercer seus direitos.</p><br/>
                <p>Preciso fazer prova?</p><br/>
                <p>Sim, o DETRAN/CIRETRAN pode exigir prova presencial para esse curso.</p><br/>
            </div>
        
            <div className='modulo'>
                <p>Módulo 1 – Legislação de Trânsito - 10 h/aula </p>
                <p>Módulo 2 – Direção Defensiva - 15 h/aula</p>
                <p>Módulo 3 – Noções de Primeiros Socorros - 10 h/aula</p>
                <p>Módulo 4 – Relacionamento Interpessoal - 15 h/aula</p>
            </div>

            <div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="custom.js"></script>
            </div>
        
        
        </div>
        
    )
}

export default Home;