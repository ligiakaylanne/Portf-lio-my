import './estilos.css'
export default function Topo() {
    return (
      <header>
          <div className='fundo'>  
            <nav className="container">
            <a href='#produtos'>HOME</a>
            <a href='#sobre'>SOBRE</a>
            <a href='#sobre'>CURRÍCULO</a>
            {/* <a href='#contato'>CONTATOS</a> */}
            </nav>
          </div>
        </header>
    )
  }
