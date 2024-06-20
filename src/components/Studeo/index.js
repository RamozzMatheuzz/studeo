import './css/style-studeo.css';

import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

import HomeStudeo from './components/pages/Home';

function Studeo (){
    return(
        <div className="body-studeo">
            <header>
            <Header></Header>
            </header>
            <menu>
            <Menu></Menu>
            </menu>
            <section>
                <HomeStudeo></HomeStudeo>
                <Footer></Footer>
            </section>
        </div>
    )
}

export default Studeo;