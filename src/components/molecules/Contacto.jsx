// ../molecules/Contacto
import React from "react";

import Texto from '../atoms/Texto'

function contacto(){
    return(
        <div>
            <h2><b>Contacto</b></h2>
            <Texto mostrar='Telefono: +57 311 621 1659' />
            <Texto mostrar='Correo: danielcardona181462@correo.itm.edu.co' />
            <Texto mostrar='Ciudad: Medellín, Colombia' />
            {/* agregar mas cosas */}
        </div>
    );
}

export default contacto;