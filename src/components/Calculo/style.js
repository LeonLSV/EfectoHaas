import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const TextoCalculo = styled.h3`
  ${fadeIn({ time: "1s" })}
  color: white;
  font-family: "Press Start 2P", cursive;
  text-align: center;
  font-size: ${(props) => props.size};
  text-decoration: none;
  outline: none;
`;

export const ContainerCalcular = styled.div`
  ${fadeIn({ time: "1s" })}
  margin-top: 30px;
  outline: none;
  text-decoration: none;
  background: none;
  border: none;
`;

export const Canales = styled.h2`
  padding: 0 20px;
  font-size: 16px;
  ${fadeIn({ time: "1.5s" })}
`;

export const ContainerEfectoInput = styled.div`
  ${fadeIn({ time: "1.5s" })}
`;
export const ContainerEfecto = styled.div`
  ${fadeIn({ time: "2s" })}
`;
