import Head from 'next/head'
import Menu from '../components/Menu'
import styles from '../styles/Cursos.module.css'

export default function Home() {
  return (

    
    <div className={styles.container}>
      <Head>
          <title>DW - Cursos</title>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' />     
      </Head>
      <Menu/><br></br><br></br>
      
     

      <main className={styles.main}>
        <h1 className={styles.title}> Bem Vindos aos Cursos</h1>

        <p className={styles.description}><code className={styles.code}></code>
        </p>

        <div className={styles.grid}> {/*COLETIVO ATUALIZAÇÃO*/}
                <a href="/atual_coletivo" className={styles.card}>
                  <h2>ATUALIZAÇÃO  &rarr;</h2>
                  <p>PARA CONDUTORES DE VEÍCULO DE TRANSPORTE COLETIVO DE PASSAGEIROS</p>
                </a>

                <a href="/cap_coletivo" className={styles.card}> {/*COLETIVO*/}
                  <h2>CAPACITAÇÃO  &rarr;</h2>
                  <p>PARA CONDUTORES DE VEÍCULO DE TRANSPORTE COLETIVO DE PASSAGEIROS</p>
                </a>

                <a href="/atual_escolares" className={styles.card}> {/*COLETIVO ATUALIZAÇÃO*/}
                  <h2>ATUALIZAÇÃO  &rarr;</h2>
                  <p>PARA CONDUTORES DE VEÍCULOS DE TRANSPORTE DE ESCOLARES</p>
                </a>
                
                <a href="/cap_escolares" className={styles.card}> {/*ESCOLARES*/}
                  <h2>CAPACITAÇÃO &rarr;</h2>
                  <p>PARA CONDUTORES DE VEÍCULOS DE TRANSPORTE DE ESCOLARES</p>
                </a>

                <a href="/atual_indivisiveis" className={styles.card}> {/*INDIVISIVEIS*/}
                  <h2>ATUALIZAÇÃO &rarr;</h2>
                  <p>PARA CONDUTORES DE VEÍCULOS DE TRANSPORTE DE CARGA INDIVISÍVEL</p>
                </a>

                
                <a href="/cap_indivisiveis" className={styles.card}> {/*INDIVISIVEIS ATUALIZAÇÃO*/}
                  <h2>CAPACITAÇÃO &rarr;</h2>
                  <p>PARA CONDUTORES DE VEÍCULOS DE TRANSPORTE DE CARGA INDIVISÍVEL</p>
                </a>

                <a href="/atual_mopp" className={styles.card}> {/*MOPP ATUALIZAÇÃO*/}
                  <h2>ATUALIZAÇÃO &rarr;</h2>
                  <p>PARA CONDUTORES DE VEÍCULOS DE TRANSPORTE DE PRODUTOS PERIGOSOS – MOPP</p>
                </a>

                <a href="/cap_mopp" className={styles.card}> {/*MOPP*/}
                  <h2>CAPACITAÇÃO &rarr;</h2>
                  <p>PARA CONDUTORES DE VEÍCULOS DE TRANSPORTE DE PRODUTOS PERIGOSOS – MOPP</p>
                </a> 
                
                <a href="/atual_emergencia" className={styles.card}> {/*EMERGENCIA ATUALIZAÇÃO*/}
                  <h2>ATUALIZAÇÃO  &rarr;</h2>
                  <p>PARA CONDUTORES DE VEÍCULOS DE EMERGÊNCIA</p>
                </a>

                <a href="/cap_emergencia" className={styles.card}> {/*EMERGENCIA*/}
                  <h2>CAPACITAÇÃO &rarr;</h2>
                  <p>PARA CONDUTORES DE VEÍCULOS DE EMERGÊNCIA</p>
                </a>

                <div className={styles.grid}>

                <a href="/reciclagem" className={styles.card}> {/*RECICLAGEM*/}
                  <h2>RECICLAGEM &rarr;</h2>
                  <p>PARA CONDUTORES INFRATORES </p>
                </a>

                <a href="/atual_renovacao" className={styles.card}> {/*ATUALIZAÇÃO*/}
                  <h2>ATUALIZAÇÃO &rarr; </h2>
                  <p>PARA </p>
                  <p>RENOVAÇÃO DE CNH </p>
                </a>    
                </div>    

          
        </div>
      

       
        </main>

            <div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="custom.js"></script>
            </div>

      <footer className={styles.footer}>
        {/*<a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>*/}
      </footer>

      
    </div>
  )
}
