import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import { ImgItems } from "../ImgItems";
import './Pocetna.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Sat from '../Sat';


function Pocetna() {
    return (<div>
        <Sat></Sat>
        <h1>Zgrade u kojima ste profesionalni upravnik:</h1>
        <div className="zgrade">
            {ImgItems.map((item, index) => {
                return (
                    <div className="zgrada">
                        <img className={item.cName} src={item.url} alt="" />
                        <div className="zgrada-info">{item.opis}</div>
                        <Button className="posaljiRacune" onClick={() => { alert('Racuni poslati na adresu: ' + item.opis) }} buttonStyle='btn--primary'>Posalji racune stanarima</Button>
                    </div>
                )
            })}

        </div>
    </div>
    );


}

export default Pocetna;