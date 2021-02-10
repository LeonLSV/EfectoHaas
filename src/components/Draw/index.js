import React from "react";
import { Recuadro, Instrumento } from "./styled";
import vanhalen from "../../images/vanhalen.png";

const Draw = (props) => {
  return (
    <>
      <Recuadro width={props.ancho} height={props.largo} />
      <Instrumento
        src={vanhalen}
        alt="Guitarra"
        left={props.izq}
        right={props.der}
        margin={props.margi}
      />
    </>
  );
};

export default Draw;
