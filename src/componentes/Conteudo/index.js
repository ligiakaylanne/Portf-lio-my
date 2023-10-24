import './estilos.css';
import SecaoCapa from '../SecaoCapa';
import SecaoSobre from '../SecaoSobre';
import SecaoCurriculo from '../SecaoCurriculo';
// import SecaoProjetos from '../SecaoProjetos';

export default function Conteudo() {
  return (
    <main>
      <SecaoCapa />
      <SecaoSobre />
      <SecaoCurriculo />
      {/* <SecaoProjetos /> */}
    </main>
  )
}