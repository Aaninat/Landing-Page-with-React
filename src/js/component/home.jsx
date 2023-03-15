import React from "react";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

//TODO ES UN COMPONENTE
//un componente es una función que inicia con Mayúscula
//los componentes son funciones que RETORNAN HTML
//los componentes se llaman como si fueran una etiqueta HTML
//Componentes tienes que estar iniciados en Mayuscula
// ctrl s guarda

function Cimiento (){
    return <div>
      <Navbar/>
      <Jumbotron/>
      <div>
      </div>
      
        <div className="row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <Footer/>
    </div>
}
//equivalente a module.exports
export default Cimiento;