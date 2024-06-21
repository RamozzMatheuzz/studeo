import '../../../css/style-studeo.css';
import filmCam from '../../../../../img/studeo/fimlCam-icon.svg';

function AulaC (){
    return(
        <div className="bAtividade">
            <p className="situacao">Entregue</p>
            <div className="bitemsAtividade">
                
                

                <button className="btnAulas btnA1">
                    <img src="" alt=""/>
                    assistir aula
                </button>

                <div className="bBtns">
                    <button className="btnAulas btnA2">
                        <img src="" alt=""/>
                        assistir aula
                    </button>
                    <button className="btnAulas btnA2">
                        <img src="" alt=""/>
                        assistir aula
                    </button>
                </div>
                
                <p className="entrega">Disponível até dia 31/12/2024</p>
            </div>
        </div>
    )
}

export default AulaC;