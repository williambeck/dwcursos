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
      <Menu/><br></br>
      
     

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem Vindos aos Cursos  {/*<a href="https://nextjs.org">Next.js!</a>*/}
        </h1>

        <p className={styles.description}>
          {/*Get started by editing{' '}*/}
          <code className={styles.code}>{/*pages/index.js*/}</code>
        </p>

        <div className={styles.grid}>
          <a href="/atual_coletivo" className={styles.card}>
            <h2>ATUALIZAÇÃO  &rarr;</h2>
            <p>PARA CONDUTORES DE VEÍCULO DE TRANSPORTE COLETIVO DE PASSAGEIROS</p>{/*<p>Find in-depth information about Next.js features and API.</p>*/}
          </a>

          <a href="/atual_emergencia" className={styles.card}>
            <h2>ATUALIZAÇÃO  &rarr;</h2>
            <p>PARA CONDUTORES DE VEÍCULOS DE EMERGÊNCIA{/*quizzes!*/}</p>
          </a>

          <a href="/atual_escolares" className={styles.card}>
            <h2>ATUALIZAÇÃO  &rarr;</h2>
            <p>PARA CONDUTORES DE VEÍCULOS DE TRANSPORTE DE ESCOLARES</p>
          </a>

          <a href="/atual_indivisiveis" className={styles.card}>
            <h2>ATUALIZAÇÃO &rarr;</h2>
            <p>PARA CONDUTORES DE VEÍCULOS DE TRANSPORTE DE CARGA INDIVISÍVEL</p>
          </a>

          <a href="/atual_mopp" className={styles.card}>
            <h2>ATUALIZAÇÃO &rarr;</h2>
            <p>PARA CONDUTORES DE VEÍCULOS DE TRANSPORTE DE PRODUTOS PERIGOSOS – MOPP</p>
          </a>
        </div>
      

        <div className={styles.grid}>
          <a href="/cap_coletivo" className={styles.card}>
            <h2>CAPACITAÇÃO &rarr;</h2>
            <p>PARA CONDUTORES DE VEÍCULO DE TRANSPORTE COLETIVO DE PASSAGEIROS.</p>
          </a>

          <a href="/cap_emergencia" className={styles.card}>
            <h2>CAPACITAÇÃO &rarr;</h2>
            <p>PARA CONDUTORES DE VEÍCULOS DE EMERGÊNCIA</p>
          </a>

          <a href="/cap_escolares" className={styles.card}>
            <h2>CAPACITAÇÃO &rarr;</h2>
            <p>PARA CONDUTORES DE VEÍCULOS DE TRANSPORTE DE ESCOLARES</p>
          </a>

          <a href="/cap_indivisiveis" className={styles.card}>
            <h2>CAPACITAÇÃO &rarr;</h2>
            <p>PARA CONDUTORES DE VEÍCULOS DE TRANSPORTE DE CARGA INDIVISÍVEL</p>
          </a>

          <a href="/cap_mopp" className={styles.card}>
            <h2>CAPACITAÇÃO &rarr;</h2>
            <p>PARA CONDUTORES DE VEÍCULOS DE TRANSPORTE DE PRODUTOS PERIGOSOS – MOPP</p>
          </a>
        </div>

        <div className={styles.grid}>
          <a href="/cap_coletivo" className={styles.card}>
            <h2>RECICLAGEM </h2>
            <p>PARA RECICLAGEM PARA CONDUTORES INFRATORES &rarr;</p>
          </a>

          <a href="/atual_renovacao" className={styles.card}>
            <h2>ATUALIZAÇÃO<br/> </h2>
            <p>PARA </p>
            <p>RENOVAÇÃO DE CNH &rarr;</p>
          </a>

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
