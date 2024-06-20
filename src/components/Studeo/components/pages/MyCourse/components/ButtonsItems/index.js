import imgFile from '../../../../../../../img/studeo/file-icon.svg';
import tropyImg from '../../../../../../../img/studeo/tropy-icon.svg';
import notesImg from '../../../../../../../img/studeo/notes-icon.svg';
import boletimImg from '../../../../../../../img/studeo/boletim-icon.svg';
import clockImg from '../../../../../../../img/studeo/clock-icon.svg';
import bookPImeg from '../../../../../../../img/studeo/bookPencil-icon.svg';
import frequencyImg from '../../../../../../../img/studeo/frequency-icon.svg';

import '../../../../../css/style-studeo.css';

function ButtonsItems (){
    return(
        <div className="flex b-cards">
            <button className="btnY">
                <img src={tropyImg} alt="img tropy" />
                Estágio
            </button>

            <button className="btnY">
                <img src={notesImg} alt="img notes" />
                Avaliação Digital
            </button>

            <button className="btnY">
                <img src={notesImg} alt="img notes" />
                docs. p/ assinar
            </button>

            <button className="btnY">
                <img src={boletimImg} alt="img boletim" />
                Boletim
            </button>

            <button className="btnY">
                <img src={clockImg} alt="img clock" />
                Histórico
            </button>

            <button className="btnY">
                <img src={bookPImeg} alt="img bookP" />
                Atividade Complementar
            </button>

            <button className="btnY">
                <img src={imgFile} alt="img File" />
                Matriz Curricular
            </button>
            
            <button className="btnY">
                <img src={frequencyImg} alt="img frequency" />
                Frequência
            </button>
        </div>
    )
}

export default ButtonsItems;