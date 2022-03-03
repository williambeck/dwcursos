import Head from 'next/head';
import Menu from '../components/Menu';
import styles from '../styles/Cursos.module.css';

function Home() {
    return (
        <div>
            <Head>
                <title>DW - Contato</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' /> 
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="custom.js"></script>
            </Head>
            <Menu />
            <body className='contact-form'> </body>
            <section className='contato'/>
            <div className="contact-form"/>
        <fieldset class="form-grid"/>
          <legend>Contact me</legend>

          <div className="form-group">
            <label for="first-name">Nome</label>
            <input type="text" name="first-name" id="first-name" placeholder="Your name"/>
          

          <div className="form-group">
            <label for="last-name">Sobrenome</label>
            <input type="text" name="last-name" id="last-name" placeholder="Your last name"/>
          </div>

          <div className="form-group">
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Your e-mail"/>
          </div>

          <div className="form-group full-width">
            <label for="message">Mensagem</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message"></textarea>
          </div>

          <div class="form-group full-width">
            <button type="submit">Enviar Mensagem</button>
          </div>
        
      </div>  
    </div>
                
       )
}

export default Home;