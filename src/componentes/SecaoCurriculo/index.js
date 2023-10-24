import './estilos.css'
export default function SecaoCurriculo() {
    return (
      <section id='curriculo'>
        <div>
            <h1>CURRÍCULO</h1>
            {/* <h3>Formação Acadêmica</h3> */}
            <div className='centro'>
            <h5>Formação Acadêmica</h5>
              <ul className='centralizar'>
                <li>Graduando em Ciência da computação - Bacharelado - Centro Universitário Unipê<br></br>
            Data da conclusão: 12/2026</li>
            <li>Ensino médio - Ecit José Rocha Sobrinho - 2019-2021</li>
              </ul>
              <h5>Cursos Extracurriculares</h5>
              <ul className='centralizar'>
                <li>HTML - Devmidia</li>
                <li>CSS - Devmidia</li>
                <li>JavaScript - Devmidia</li>
                <li>React - Devmidia</li>
              </ul>
              </div>
               
        </div>
        <hr></hr>
      <div className='contatos'>
      <class>Lígia Kaylanne</class>
      <a href='https://github.com/ligiakaylanne'><img  src='assets/github.png' alt="git"/></a>
      <a href='https://www.linkedin.com/in/l%C3%ADgia-kaylanne-9b7947240/'><img  src='assets/linkedin.png' alt="git"/></a>
      <a href='https://www.instagram.com/_ligiakaylanne/'><img  src='assets/insta.png' alt="git"/></a>
      </div>
      </section>
    );
  }