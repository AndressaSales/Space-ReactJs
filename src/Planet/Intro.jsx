import '../Planet/style/Index.css';
import Planetas from './Planets/Planetas';
import Navbar from './Navbar';
function Intro(){
    return(
        <>
            <Navbar />
            <h1>Conceito</h1>
            <h3>Espaço é um termo que vem do latim spatĭum e que admite varias acepções. A principal diz respeito à extensão que contém a matéria existente.</h3>
            <h4>Estima-se que o Universo tenha cerca de 13,8 bilhões de anos</h4>
            <h1>Sistema Solar</h1>
            <h4>"é um conjunto formado por oito planetas e outros corpos celestes, que orbitam o Sol, a sua principal estrela. Está localizado na Via Láctea, uma das galáxias que formam o Universo. São planetas do Sistema Solar: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno."</h4>
            <Planetas />
        </>
    );
}
export default Intro;