import styled from "styled-components";

export const TextoCalculo = styled.h3`
  color: white;
  font-family: "Press Start 2P", cursive;
  text-align: center;
  font-size: ${(props) => props.size};
  text-decoration: none;
  outline: none;
`;

export const InputCal = styled.input`
  width: 100px;
`;

export const ContainerCalcular = styled.button`
  margin: 30px 0;
  outline: none;
  text-decoration: none;
  background: none;
  border: none;
`;
