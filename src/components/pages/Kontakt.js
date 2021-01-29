import React from 'react';
import KontaktForma from '../../components/KontaktForma';

function Kontakt(){
    const kontakt={
        telefon: "061/6448004"
    }
    return(
        <div className="container" style={{marginTop: 2 + 'em'}}>
            <h2>Ukoliko imate problema sa koriscenjem sajta posaljite nam poruku:</h2>
            <KontaktForma/>
            <p>Takodje, možete nas pozvati na broj {kontakt.telefon} </p>
            <br></br>
        </div>
    )
}

export default Kontakt;