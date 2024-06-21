import folderImg from '../../../../img/studeo/folder.svg';
import fileImg from '../../../../img/studeo/file-icon.svg';
import '../../css/style-studeo.css';

function BtnMaterials (){
    return(
        <div className="section-btn">
                <button className="btnP">
                    <img src={folderImg} alt="img boletim" />
                    material da diciplina
                </button>
                <button className="btnP">
                    <img src={fileImg} alt="img boletim" />
                    plano de ensino
                </button>
            </div>
    )
}

export default BtnMaterials;