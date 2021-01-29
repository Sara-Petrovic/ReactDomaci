import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import { ImgItems } from "../ImgItems";
import './Pocetna.css';
import Sat from '../Sat';


function Pocetna() {
    return (<div>
        <div className="container">
        <Sat></Sat>
        <h1>Zgrade u kojima ste profesionalni upravnik:</h1>
        </div>
      
        <div className="container">
            <div class="row">

                {ImgItems.map((item, index) => {
                    return (
                        <div class="content col-sm-4 text-center" key={index}>
                            <img class="img-responsive" src={item.url} alt="" width="100%"/>
                            <div>{item.opis}</div>
                            <Button onClick={() => { alert('Racuni poslati na adresu: ' + item.opis) }} buttonStyle='btn--primary'>Posalji racune stanarima</Button>
                        </div>
                    )
                })}
            </div>

        </div>
    </div>
    );


}

export default Pocetna;