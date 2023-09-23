import React from "react";
import Header from '../organisms/Header';
import Main from '../organisms/Main';
import Aside from '../organisms/Aside'
import Footer from '../organisms/Footer'; 

function hojaDeVida(){
    return(
        <div class='container'>
            <Header />
            <Main />
            <Aside />
            <Footer />
            {/* agregar mas cosas */}
        </div>
    );
}


export default hojaDeVida;