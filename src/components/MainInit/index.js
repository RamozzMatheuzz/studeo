import React from 'react';
//IMPORT STYLES
import '../../css/sass/style-home.css';

// IMPORT IMAGES
import  logo1 from '../../img/logo1.svg';
import imgEua from '../../img/home/eua-icon.svg';
import imgEsp from '../../img/home/esp-icon.svg';
import star from '../../img/home/star.svg';
import  logo3 from '../../img/logo3.svg';
import  wpp from '../../img/home/whatsapp-icon.svg';
import  lkd from '../../img/home/linkedin-icon.svg';
import  insta from '../../img/home/instagram-icon.svg';

//IMPORT ROUTES

function MainIini() {
  return (
    <>
      <header className="flex-space-between">
        <img src={logo1} alt="Logo"/>
        <ul className="flex">
          <li><a href="google.com">Cursos</a></li>
          <li><a href="google.com">Abra um Polo</a></li>
          <li><a href="google.com">Institucional</a></li>
        </ul>

        <div className="buttons">
          <button className="btn-lang">
            <img alt="svg" src={imgEua} />
            EUA
          </button>
          <button className="btn-lang">
            <img src={imgEsp} alt="svg" />
            ESP
          </button>
          
          <a href="/studeo"><button className="btn1"> Já Sou Aluno</button></a>
          
        </div>
      </header>
 
      <div className="banner">
        <div className="content">
          <h1>Nota Máxima no MEC</h1>
          <div box-stars>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <p>Mais de 1000 Polos para Estudar Quando Puder, Onde Quiser, Com Todo Suporte da Melhor EAD. Formação em 5 anos. Onde e Quando Quiser. Cursos Profissionalizantes Em Áreas Específicas</p>
        </div>
      </div>

      <p className="tittle">O QUE VOCÊ PROCURA?</p>

      <div className="cards">
        <div className="card card1">
          <h3>EDUCAÇÃO A DISTÂNCIA</h3>
          <p>Alcance o nível superior aproveitanto toda a flexibilidade, acessibilidade, diversidade de opções, interatividade e eliminação de barreiras geográficas.</p>
          <a href="/none">INSCREVA-SE </a>
        </div>
        <div className="card card2">
          <h3>EDUCAÇÃO PRESENCIAL</h3>
          <p>O presencial oferece vantagens como interação direta, aprendizado prático, formação de redes, e um ambiente acadêmico inspirador.</p>
          <a href="/none">INSCREVA-SE </a>
        </div>
        <div className="card card1">
          <h3>MESTRADO E DOUTORADO</h3>
          <p>Avance ao próximo nível alcançando ainda mais conecimento se tornando em especialista na sua área.</p>
          <a href="/none">INSCREVA-SE </a>
        </div>
      </div>

      <footer>
        <img src={logo3} className="logo" alt="svg"/>
        <div className="box-items">
          <div className="institucional">
            <p className="item-tittle">institucional</p>
            <a href="/none">Mestrado e Doutorado</a>
            <a href="/none">Extensão</a>
            <a href="/none">Pesquisa</a>
            <a href="/none">ICETI</a>
          </div>
          <div className="institucional">
            <p className="item-tittle">atendimento</p>
            <a href="/none"><img src={wpp} alt="svg" />Envie uma Mensagem</a>
            <a href="/none"><img src={insta} alt="svg" />Acesse nosso Instagram</a>
            <a href="/none"><img src={lkd} alt="svg" />Acesse nosso Linkedin</a>
          </div>
          <a href="/none"><p className="item-tittle">canal de ética</p></a>
        </div>

        <div className="copy">
          <p>© 2024 UNICESUMAR. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default MainIini;
