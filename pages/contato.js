import { useState } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';

function Contato() {

    const [dataForm, setDataForm] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    });

    const [response, setResponse] = useState({
        type: '',
        mensagem: ''
    })

    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

    const sendContact = async e => {
        e.preventDefault();
        console.log(dataForm.email);

        try {
            const res = await fetch('http://localhost:8080/add-msg-contact', {
                method: 'POST',
                body: JSON.stringify(dataForm),
                headers: { 'Content-Type': 'application/json' }
            });

            const responseEnv = await res.json();

            if (responseEnv.erro) {
                setResponse({
                    type: 'error',
                    mensagem: responseEnv.mensagem
                });
            } else {
                setResponse({
                    type: 'success',
                    mensagem: responseEnv.mensagem
                });

                setDataForm({
                    name: '',
                    email: '',
                    subject: '',
                    content: ''
                });
            }
        } catch (err) {
            setResponse({
                type: 'error',
                mensagem: "Erro: Favor entrar em contato por WhatsApp!"
            });
        }
    }

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site sobre ..." />
                <meta name="author" content="William Beck" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <title>DW - Contato</title>
            </Head>
            <Menu /><br></br><br></br>

            <section className="contact">
                <div className="max-width">
                    <h2 className="title">Contato</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <p>Nossos canais de contato</p>
                            <div className="icons">
                                <div className="row">
                                    <i class="fas fa-user"></i>
                                    <div className="info">
                                        <div className="head">
                                            Empresa
                                        </div>
                                        <div className="sub-title">
                                            DW Treinamentos
                                        </div>
                                    </div>
                                </div>

                                <div className="row"> 
                                  <i class="fab fa-facebook-square"></i>  
                                    <div className="info">
                                        <div className="head">
                                          <a href="https://www.facebook.com/profile.php?id=100076670628493" target="_blank">Facebook </a>
                                        </div>
                                        
                                        
                                        <div className="sub-title">
                                        <a href="https://www.facebook.com/profile.php?id=100076670628493" target="_blank">Curta Nossa Página! </a>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                <i class="fab fa-instagram"></i>
                                    <div className="info">
                                        <div className="head">
                                        <a href="https://www.instagram.com/dw.treinamentos/" target="_blank">Instagram </a>
                                            
                                        </div>
                                        <div className="sub-title">
                                        <a href="https://www.instagram.com/dw.treinamentos/" target="_blank">Nos Siga no Instagram! </a>
                                        
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                <i class="fab fa-whatsapp"></i>
                                    <div className="info">
                                        <div className="head">
                                               whatsapp
                                        </div>
                                        <div className="sub-title">
                                        (31) 9-8999-0882
                                        </div>
                                    </div>
                                </div>

                                

                            </div>
                        </div>

                        <div className="column right">
                            <div className="text">
                                Formulário de contato
                            </div>

                            {response.type === 'error' ? <p className="alert-danger">{response.mensagem}</p> : ""}
                            {response.type === 'success' ? <p className="alert-success">{response.mensagem}</p> : ""}

                            <form onSubmit={sendContact}>
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" name="name" placeholder="Digite o nome" onChange={onChangeInput} value={dataForm.name} />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="field name">
                                        <input type="email" name="email" placeholder="Digite o seu melhor e-mail" onChange={onChangeInput} value={dataForm.email} />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" name="subject" placeholder="Digite o assunto da mensagem" onChange={onChangeInput} value={dataForm.subject} />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" name="content" placeholder="Digite o conteúdo da mensagem" onChange={onChangeInput} value={dataForm.content} />
                                    </div>
                                </div>

                                <div className="button-area">
                                    <button type="submit">Enviar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="custom.js"></script>
        </div>
    )
}

export default Contato;