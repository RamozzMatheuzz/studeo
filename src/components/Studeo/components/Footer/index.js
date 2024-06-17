import './sass/style-footer.css';

function Footer (){
    return(
        <div className="footer-studeo flex-between">
            <div className="direitos">
                <b>© 2024 UNICESUMAR.</b>
                <p>Todos os direitos reservados.</p>
            </div>
            <a href="/none">Política de privacidade</a>
        </div>
    )
}

export default Footer;