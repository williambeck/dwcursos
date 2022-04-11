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
            
            <body className='sobre'><br></br><br></br><br></br><br></br><br></br>
            <div className='sobre-text'>

                <h2 className='sobre-text-1'>Quem Somos &rarr;</h2><br></br>        

                <div className='sobre-border'><p>A DW Treinamentos é uma empresa jovem com o simples objetivo de levar até seus clientes um serviço seguro e com qualidade e excelência desde o primeiro contato.</p>
                    <p>Prezamos pela segurança, agilidade e modernidade de nossos produtos. Oferecemos todo o suporte necessário para que você, cliente ou parceiro, tenha a melhor experiência conosco.</p>
                    <p>Nossos cursos são regulamentados segundo a legislação vigente e atualizados periodicamente, garantindo a qualidade e legitimidade de nosso repertório, que vai de reciclagem ao motorista comum até o profissional de cargas pesadas vivas ou perigosas.</p>
                    <p>Venha conhecer a DW Treinamentos. Aqui, você encontra o curso que precisa!!!</p><br></br><br></br>
                </div><br></br>

                 <h2 className='sobre-text-1'> Objetivos &rarr;</h2><br></br>

                 <div className='sobre-border'>
                    <p>- Especializar motoristas profissionais para o transporte de cargas e pessoas através de treinamento.</p>
                    <p>- Proporcionar a estes o conhecimento de seus direitos e deveres, atualizá-los sobre as leis de trânsito e os objetivos das empresas.</p>
                    <p>- Conscientizar e sensibilizar o profissional quanto a melhor maneira de conduzir o veículo com segurança, visando a preservação da integridade física do condutor e dos passageiros, da carga do veículo, da população vizinha ao trajeto e do meio ambiente.</p>
                    <p>- Evitar, ou ao menos diminuir o número de acidentes no trânsito.</p>
                </div>
                
                
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