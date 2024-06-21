import Header from "../../Header";
import Menu from "../../Menu";
import Andamento from "../../Andamento";

import Footer from "../../Footer";
import Acompanhamento from "../../Acompanhamento";
import imgGrowth from "../../../../../img/studeo/growth-icon.svg";
import BtnMaterials from "../../BtnMaterials";

import Atividade from "../../Footer/Atividade";
import AulaC from "../../Footer/AulaC";

function Diciplina (){
    return(
        <div className="body-studeo">
            <header>
            <Header></Header>
            </header>
            <menu>
            <Menu></Menu>
            </menu>
            <section>
                <h6 className="tAndamento">Andamento</h6>
                <Andamento></Andamento>

                <div className="titleAcomp">
                    <img src={imgGrowth} alt="img growth"/>
                    <h5>Acompanhamento</h5>
                </div>
                <Acompanhamento></Acompanhamento>

                <BtnMaterials></BtnMaterials>

                <h6 className="tAndamento">Atividades Avaliativas</h6>

                <div className="flex Atividades">
                    <Atividade></Atividade>
                    <Atividade></Atividade>
                    <Atividade></Atividade>
                    <Atividade></Atividade>
                    <Atividade></Atividade>
                    <Atividade></Atividade>
                    <Atividade></Atividade>
                </div>

                <h6 className="tAndamento">aulas conceituais</h6>
                
                <Footer></Footer>
            </section>
        </div>
    )
}

export default Diciplina;