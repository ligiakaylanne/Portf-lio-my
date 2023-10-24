import './estilos.css';
export default function SecaoCapa() {
  return (
    <section>
      <div className='linha'>
      <div className="conteudo">
        <div className="texto">
          <h2>Olá, meu nome é</h2>
            <h1 className='ligia'>Lígia Kaylanne</h1> <h2>Estou atuando como desenvolvedora web Front-End!</h2>
        </div>
        <div className="imagem">
        <br></br>
        <br></br>
        <br></br>


          <img className='minha' src="assets/foto-minha.jpeg" alt="Minha Foto" />
        </div>
      </div>
      <br></br><br></br><br></br>

      <hr></hr>
      <div className='contatos'>
      <class>Lígia Kaylanne</class>
      <a href='https://github.com/ligiakaylanne'><img  src='assets/github.png' alt="git"/></a>
      <a href='https://www.linkedin.com/in/l%C3%ADgia-kaylanne-9b7947240/'><img  src='assets/linkedin.png' alt="git"/></a>
      <a href='https://www.instagram.com/_ligiakaylanne/'><img  src='assets/insta.png' alt="git"/></a>
      </div>
      </div>
    </section>
  );
}
