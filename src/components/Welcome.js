import React from "react";
import Fada from "../assets/fada1.png";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="container">
      <img src={Fada} alt="fada" className="fada"></img>
      <div className="texto">
        <h1 className="titulo">Caminhos da Imaginação - A Saga das Escolhas</h1>
        <p className="apresentacao">
          Seja muito bem-vindo(a) a um mundo de possibilidades sem limites!
          Neste incrível RPG, você está prestes a explorar os mais fascinantes
          desdobramentos da imaginação. Cada decisão que você tomar moldará não
          apenas a sua jornada, mas o próprio tecido desse universo único.
          Prepare-se para mergulhar em uma saga onde as escolhas são o fio
          condutor, e a aventura aguarda a sua coragem. Seja herói, vilão, forje
          alianças ou trace seu próprio caminho - o destino é seu para escrever.
          Embarque nessa jornada emocionante e descubra o que os Caminhos da
          Imaginação têm a oferecer!
        </p>
      </div>
    </div>
  );
};

export default Welcome;
