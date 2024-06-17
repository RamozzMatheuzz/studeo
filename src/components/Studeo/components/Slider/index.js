import './css/style-slider.css'
import './slider';
import imgSlider from './img/frame-slider.svg';

function Slider (){
    return(
        <>
        <div class="wrapper" data-slide="wrapper">
        <div class="slide-wrapper">

            <button class="slide-nav-button slide-nav-previous fas fa-chevron-left" data-slide="nav-previous-button"></button>
            <button class="slide-nav-button slide-nav-next fas fa-chevron-right" data-slide="nav-next-button"></button>

            <div class="slide-list" data-slide="list">
                
                <div class="slide-item" data-slide="item" data-index="0">
                    <div class="slide-content">
                        <div class="slide-description">
                            <h1>Saiba mais</h1>
                            <p>Sobre o seu boleto e meios de pagamento.</p>
                            <button className="btn1">Ver mais</button>
                        </div>
                        <img class="slide-image"  src={imgSlider} alt="img Slider" />
                    </div>
                </div>

                <div class="slide-item" data-slide="item" data-index="0">
                    <div class="slide-content">
                        <div class="slide-description">
                            <h1>Saiba mais</h1>
                            <p>Sobre o seu boleto e meios de pagamento.</p>
                            <button className='btn1'>Ver mais</button>
                        </div>
                        <img class="slide-image"  src={imgSlider} alt="img Slider" />
                    </div>
                </div>
                <div class="slide-item" data-slide="item" data-index="0">
                    <div class="slide-content">
                        <div class="slide-description">
                            <h1>Saiba mais</h1>
                            <p>Sobre o seu boleto e meios de pagamento.</p>
                            <button className='btn1'>Ver mais</button>
                        </div>
                        <img class="slide-image"  src={imgSlider} alt="img Slider" />
                    </div>
                </div>
                <div class="slide-item" data-slide="item" data-index="0">
                    <div class="slide-content">
                        <div class="slide-description">
                            <h1>Saiba mais</h1>
                            <p>Sobre o seu boleto e meios de pagamento.</p>
                            <button className='btn1'>Ver mais</button>
                        </div>
                        <img class="slide-image"  src={imgSlider} alt="img Slider" />
                    </div>
                </div>

            </div>

            <div class="slide-controls"  data-slide="controls-wrapper">
            </div>
        </div>
    </div>
        </>
    )
}

export default Slider;