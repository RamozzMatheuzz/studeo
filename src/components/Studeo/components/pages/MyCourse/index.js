import Header from "../../Header";
import Menu from "../../Menu";
import DiciplinasMatriculadas from "../../Matriculadas";
import ButtonsItems from "./components/ButtonsItems";
import BtnPalestras from "../../BtnPalestras";
import Andamento from "../../Andamento";

import Footer from "../../Footer";

function MyCourse (){
    return(
        <div className="body-studeo">
            <header>
            <Header></Header>
            </header>
            <menu>
            <Menu></Menu>
            </menu>
            <section>
                <Andamento></Andamento>
                <ButtonsItems></ButtonsItems>
                <DiciplinasMatriculadas></DiciplinasMatriculadas>
                
                <h4>DICIPLINAS CURSADAS</h4>
                <p className="textDiciplinas">Você visualizará informações sobre as disciplinas que atualmente está matriculado. Normalmente você cursa de duas a três disciplinas curriculares. No entanto, até que um módulo se encerre você poderá visualizar as disciplinas do próximo módulo, ou ainda, acumular disciplinas em regime de dependência e/ou adaptação.</p>
                
                <div className="goD">
                    <a href="/none">Ver Diciplinas </a>
                </div>

                <BtnPalestras></BtnPalestras>
                <Footer></Footer>
            </section>
        </div>
    )
}

export default MyCourse;