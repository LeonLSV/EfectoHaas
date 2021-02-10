import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const Recuadro = styled.div`
  ${fadeIn({ time: "1.5s" })}

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: 8px solid white;
  position: relative;
`;

export const Instrumento = styled.img`
  ${fadeIn({ time: "1.5s" })}

  transform: rotate(-60deg);
  width: 100px;
  margin-left: ${(props) => props.margin}px;
  position: relative;
  top: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
`;
