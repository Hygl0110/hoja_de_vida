import React from "react";

import Header from './components/organisms/Header';
import Main from './components/organisms/Main';

/* 
import Aside from './components/organisms/Aside';
import Footer from './components/organisms/Footer'; 
*/


function hojaDeVida(){
    return(
        <div>
            <Header />
            <Main />
            {/* <Aside />
            <Footer /> */}
            {/* agregar mas cosas */}
        </div>
    );
}

export default hojaDeVida;