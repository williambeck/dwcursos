import Head from 'next/head';
import Menu from '../components/Menu';

function Home() {
    return (
        <div>
            <Head>
                <title>DW - ATUALIZAÇÃO PARA CONDUTORES DE VEÍCULOS DE TRANSPORTE DE CARGA INDIVISÍVEL</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' /> 
            </Head>
            <Menu />

            <div className='indivisiveis'><br></br><br></br><br></br><br></br><br></br><br></br>
                <h1>ATUALIZAÇÃO PARA CONDUTORES DE VEÍCULOS DE TRANSPORTE DE CARGA INDIVISÍVEL</h1><br></br>                <p>O curso de ATUALIZAÇÃO PARA CONDUTORES DE VEÍCULOS DE TRANSPORTE DE CARGA INDIVISÍVEL, é totalmente em EAD (Ensino a distância).</p>
                <p>O curso é voltado aos condutores que queiram regularizar a sua profissão.</p>
                <p>O curso é rápido, são apenas 16 horas aula e você contará com um material didático elaborado especialmente para a sua atividade.</p>
                <p>Curso Rápido - 16hs/aula</p>
                <p>Conclua de 2 a 60 dias sem sair de casa</p>
                <p>Disponível 24 horas - Estude online e quando quiser! Conteúdo disponível 24 horas por dia. Basta ter acesso à internet.</p>
                <p>É rápido mesmo? O curso pode ser concluído no período de 5 dias e máximo de 60 dias a partir da confirmação da inscrição.</p>
                <p>Estude online - Estude com vídeos, textos e simulados no conforto da sua casa.</p>
                <p>Celular, tablet ou computador - Assista e estude de qualquer dispositivo, basta ter acesso a internet.</p>
                <p>Preciso fazer prova? Não é necessária a realização de prova.</p>
                <p>Quem pode fazer? Possuir certificado de conclusão de curso de capacitação. Não estar cumprindo pena de suspensão do direito de dirigir, cassação da CNH, pena decorrente de crime de trânsito, bem como, estar impedido judicialmente de exercer seus direitos.</p>
           </div><br></br><br></br>

           <div className='modulo'>
                <p>Módulo 1 – Legislação de Trânsito - 3 h/aula </p>
                <p>Módulo 2 – Direção Defensiva - 5 h/aula</p>
                <p>Módulo 3 – Noções de Primeiros Socorros - 3 h/aula</p>
                <p>Módulo 4 – Relacionamento Interpessoal - 5 h/aula</p>
            </div>  

            <div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="custom.js"></script>
            </div>

        </div>
    )
}

export default Home;