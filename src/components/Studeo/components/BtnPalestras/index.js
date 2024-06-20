import boletimImg from '../../../../img/studeo/boletim-icon.svg';
import '../../css/style-studeo.css';

function BtnPalestras (){
    return(
        <div className="section-btn">
                <button className="btnP">
                    <img src={boletimImg} alt="img boletim" />
                    Curso de Proeficiência
                </button>
                <button className="btnP">
                    <img src={boletimImg} alt="img boletim" />
                    PALESTRAS, NIVELAMENTO, OUTROS AMBIENTES
                </button>
            </div>
    )
}

export default BtnPalestras;