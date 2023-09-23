// ../organisms/Aside
import React from "react";
import Introduccion from '../molecules/Introduccion';
import Competencias from "../molecules/Competencias";
import AreasInteres from '../molecules/AreasInteres';

function aside(){
    return(
        <div className="aside">
            <Introduccion />
            <Competencias />
            <AreasInteres/>
            {/* agregar mas cosas */}
        </div>  
    );
}

export default aside;