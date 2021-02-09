import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const TitleHome = styled.h1`
  ${fadeIn({ time: "1s" })}
  font-size: 110px;
  margin: 0;
  color: white;
  text-shadow: black 2px 5px;
  margin-top: ${(props) => props.margintop};
  font-family: "Press Start 2P", cursive;

  @media (max-width: 720px) {
    font-size: 70px;
  }
  @media (max-width: 450px) {
    font-size: 50px;
    line-height: 100px;
  }
`;

export const AnimationButtonIngresar = styled.div`
  ${fadeIn({ time: "2s" })};
`;

export const LogoHome = styled.img`
  ${fadeIn({ time: "2.5s" })};
  width: 300px;
  height: auto;
  margin: 0;
  padding: 80px 0;
  @media (max-width: 720px) {
    width: 250px;
  }
`;

export const ButtonIngresar = styled.button`
  background: red;
  &:focus {
    transform: scale(1.1);
  }
`;

export const AnchorLogo = styled.a`
  &:focus {
    transform: scale(1.1);
  }
  &:hover {
    transform: scale(1.1);
  }
`;
