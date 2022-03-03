import Head from 'next/head';
import Menu from '../components/Menu';

function Home() {
    return (
        <div>
            <Head>
                <title>DW - CONDUTORES DE VEÍCULOS DE TRANSPORTE DE ESCOLARES,</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' /> 
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="custom.js"></script>                
            </Head>
            <Menu />

            <div className=''><br></br><br></br><br></br><br></br><br></br><br></br>
                <h1>CONDUTORES DE VEÍCULOS DE TRANSPORTE DE ESCOLARES</h1> <br/>
                <p>O curso de condutor de transporte de emergência, conforme estabelecido na Resolução 168/04 do CONTRAN, visa habilitar profissionalmente motoristas para a condução segura de veículos de emergência. Este curso é obrigatório para quem deseja atuar nesta área, forneceremos ao futuro profissional informações importantíssimas para que atue na área de forma exemplar, tornando-se um profissional competente e experiente.</p>
                <p> O curso para CONDUTORES DE VEÍCULOS DE TRANSPORTE DE ESCOLARES, é totalmente em EAD (Ensino a distância). O curso é voltado aos condutores que queiram regularizar a sua profissão e para os que pretendem exercê-la, o curso é de 50 h/aula e conta com um material didático voltado para a atividade.</p><br/>
                <p>Uma nova oportunidade profissional para você motorista! </p>
                <p>Transporte Escolares com segurança e saiba lidar com riscos!</p>
                <p>Curso Rápido - 50hs/aula</p>
                <p>Conclua de 7 a 60 dias - sem sair de casa</p>
                <p>Celular, tablet ou computador - Assista e estude de qualquer dispositivo, basta ter acesso a internet.</p>
                <p>Quem pode fazer?</p>
                <p>– Ser maior de 21 anos;– Estar habilitado, no mínimo, na categoria “B”;– Não estar cumprindo pena de suspensão do direito de dirigir, cassação da Carteira Nacional de Habilitação – CNH, pena decorrente de crime de trânsito, bem como não estar impedido judicialmente de exercer seus direitos.</p><br/>
                <p>Preciso fazer prova?</p><br/>
                <p>Sim, o DETRAN/CIRETRAN pode exigir prova presencial para esse curso.</p>
            </div>
        
            <div className=''>
                <p>Módulo 1 – Legislação de Trânsito - 10 h/aula </p>
                <p>Módulo 2 – Direção Defensiva - 15 h/aula</p>
                <p>Módulo 3 – Noções de Primeiros Socorros - 10 h/aula</p>
                <p>Módulo 4 – Relacionamento Interpessoal - 15 h/aula</p>
            </div>
        </div>
    )
}

export default Home;