import '../../../css/style-studeo.css';
import checkImg from '../../../../../img/studeo/check.svg';

function Atividade (){
    return(
        <div className="bAtividade">
            <p className="situacao">Entregue</p>
            <div className="bitemsAtividade">
                <img src={checkImg} alt="img check"/>
                <p className="aTitle">aai</p>
                <p>Atividade Ambientação Ingressantes</p>
                <p className="entrega">Disponível até dia 31/12/2024</p>
            </div>
        </div>
    )
}

export default Atividade;