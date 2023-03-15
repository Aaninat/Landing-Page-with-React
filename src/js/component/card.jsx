import React from "react";

function Card(){
    return( <div className="container card" style={{width: "18rem"}}>
    <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Cape Town</h5>
      <p className="card-text">Es una ciudad costera ubicada en la región occidental de Sudáfrica, en la provincia de Cabo Occidental, y es considerada una de las ciudades más bellas del mundo debido a su paisaje natural impresionante.</p>
      <a href="#" class="btn btn-primary">¿Quieres saber más?</a>
    </div>
  </div>)
   }

export default Card;

//navbar, jumbotromp y footer (crear componente; nuevo)