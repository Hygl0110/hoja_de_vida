import React from "react";
import TituloNombre from '../molecules/TituloNombre';
import Foto from '../atoms/Foto';
import Contacto from '../molecules/Contacto'
import Formacion from "../molecules/Formacion";
import Complementos from '../molecules/Complementos'

function main(){
    return(
        <div className="main">
            <TituloNombre />
            <Foto />
            <Contacto />
            <Formacion/>
            <Complementos/>
            {/* agregar mas cosas */}
        </div>
    );
}

export default main;