// ../organisms/Main
import React from "react";
import TituloNombre from '../molecules/TituloNombre';
import Foto from '../atoms/Foto';
import Contacto from '../molecules/Contacto'
import Formacion from "../molecules/Formacion";
import Complementos from '../molecules/Complementos'

function main(){
    return(
        <main class='main'>
            <TituloNombre />
            <Foto />
            <Contacto />
            <Formacion/>
            <Complementos/>
            {/* agregar mas cosas */}
        </main>
    );
}

export default main;