import DiciplinasMatriculadas from "../../Matriculadas";
import imgFile from '../../../../../img/studeo/file-icon.svg';
import BtnPalestras from '../../BtnPalestras';

function HomeStudeo (){
    return(
        <>

            <h4>diciplinas matríuculadas</h4>
            <DiciplinasMatriculadas></DiciplinasMatriculadas>
            
            <div className="goD">
                <a href="/none">Ver Diciplinas </a>
            </div>

            <button className="btnY arq">
                <img src={imgFile} alt="img file" />
                Arquivos do Curso
            </button>
            
            <BtnPalestras></BtnPalestras>
       
        </>
    )
}

export default HomeStudeo;