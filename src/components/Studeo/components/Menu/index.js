import './sass/style-menu.css'

//IMPORT IMAGES
import {imgMenu, imgTicket, imgExtension, imgMyCourse, imgCalandar, imgLibrary, imgServices, imgFinancial} from './img';

function Menu(){
    return(
        <menu>            
                <ul>
                    <li><a className="flex-between" href="/none">
                        <p>Início</p>
                        <img src={imgMenu} alt="img home"/>
                    </a></li>
                    <li><a className="flex-between" href="/none">
                        <p>Conheça o EAD</p>
                        <img src={imgTicket} alt="img home"/>
                    </a></li>
                    <li><a className="flex-between" href="/none">
                        <p>Extensão</p>
                        <img src={imgExtension} alt="img home"/>
                    </a></li>
                    <li><a className="flex-between" href="/none">
                        <p>Curso</p>
                        <img src={imgMyCourse} alt="img home"/>
                    </a></li>
                    <li><a className="flex-between" href="/none">
                        <p>Calendário</p>
                        <img src={imgCalandar} alt="img home"/>
                    </a></li>
                    <li><a className="flex-between" href="/none">
                        <p>Bibliotecas</p>
                        <img src={imgLibrary} alt="img home"/>
                    </a></li>
                    <li><a className="flex-between" href="/none">
                        <p>Serviços</p>
                        <img src={imgServices} alt="img home"/>
                    </a></li>
                    <li><a className="flex-between" href="/none">
                        <p>Financeiro</p>
                        <img src={imgFinancial} alt="img home"/>
                    </a></li>
                </ul>
        </menu>
    )
}


export default Menu;