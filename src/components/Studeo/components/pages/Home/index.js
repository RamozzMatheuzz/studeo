import DiciplinasMatriculadas from "../../Matriculadas";
import imgFile from '../../../../../img/studeo/file-icon.svg';

function HomeStudeo (){
    return(
        <>

            <h4>diciplinas matríuculadas</h4>
            <DiciplinasMatriculadas></DiciplinasMatriculadas>
            
            <div className="goD">
                <a href="/none">Ver Diciplinas </a>
            </div>

            <button className="btnY">
                <img src={imgFile} alt="img file" />
                Arquivos do Curso
            </button>

            <div className="section-btn">
                <button className="btnP">
                    <img src={imgFile} alt="img file" />
                    Curso de Proeficiência
                </button>
                <button className="btnP">
                    <img src={imgFile} alt="img file" />
                    PALESTRAS, NIVELAMENTO, OUTROS AMBIENTES
                </button>
            </div>

            
        </>
    )
}

export default HomeStudeo;