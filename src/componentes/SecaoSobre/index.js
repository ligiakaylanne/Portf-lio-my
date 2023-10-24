import './estilos.css';

export default function SecaoSobre() {
  return (
    <section id='sobre' className='sobre'>
      <div className="textosobre">
        <h1>SOBRE MIM</h1>
        <p className='texto maintexto' >Estudante bolsista de Ciência da Computação no Centro Universitário Unipê, atualmente cursando o segundo período. Sou apaixonada por tecnologia e estou em constante busca por desafios e oportunidades que me permitam expandir meus conhecimentos. Estou ansiosa para aprimorar minhas habilidades técnicas e colaborar em projetos empolgantes. Se você tem alguma oportunidade ou desafio interessante, estou pronta para me envolver!</p>
      </div>

      <h2>Tecnologias:</h2>

      <div className='imagens-container'>
        <div className='imagem-com-legenda'>
          <h3>HTML</h3>
          <img src='assets/html.png' alt='HTML' />
        </div>

        <div className='imagem-com-legenda'>
          <h3>CSS</h3>
          <img src='assets/css.png' alt='CSS' />
        </div>

        <div className='imagem-com-legenda'>
          <h3>JavaScript</h3>
          <img src='assets/JavaScript-logo.png' alt='JavaScript' />
        </div>

        <div className='imagem-com-legenda'>
          <h3>React</h3>
          <img src='assets/react.png' alt='React' />
        </div>
      </div>
      <hr />
      <div className='contatos'>
        <class>Lígia Kaylanne</class>
        <a href='https://github.com/ligiakaylanne'><img src='assets/github.png' alt="git" /></a>
        <a href='https://www.linkedin.com/in/l%C3%ADgia-kaylanne-9b7947240/'><img src='assets/linkedin.png' alt="git" /></a>
        <a href='https://www.instagram.com/_ligiakaylanne/'><img src='assets/insta.png' alt="git" /></a>
      </div>
    </section>
  );
}
