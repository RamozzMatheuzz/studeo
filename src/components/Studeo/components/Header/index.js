import './sass/header-style.css';
import imgLogo3 from '../../../../img/logo-white.svg';
import btnMenu from '../../../../img/studeo/icon-menu.svg';
import chatIcon from '../../../../img/studeo/chat-icon.svg';
import notificationIcon from '../../../../img/studeo/notifications-icon.svg';
import bookIcon from '../../../../img/studeo/book-icon.svg';

function Header (){
    return(
        <>
            <div className="header-studeo">
                <div className="header-menu">
                    <img className="logo" src={imgLogo3} alt="logo" />
                    <button className="btn-menu"><img src={btnMenu} alt="btn-menu"/></button>
                </div>
                <div className="header-pages flex-between">
                    <div className="curso">
                        <button className="comunicados btnH"><img className="logo" src={chatIcon} alt="icon chat" />Comunicados</button>
                        <button className="notificacoes btnH"><img className="logo" src={notificationIcon} alt="icon notification" />Notificações</button>
                        <button className="atividades btnH"><img className="logo" src={bookIcon} alt="icon notification" />Atividades</button>
                    </div>
                    <div className="aluno flex">
                        <h4>Nome do Aluno</h4>
                        <div className="circle-image">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header; 