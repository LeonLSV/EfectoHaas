import styled from "styled-components";

export const TitleHome = styled.h1`
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

export const LogoHome = styled.img`
  width: 300px;
  margin: 0;
  padding: 80px 0;
  @media (max-width: 720px) {
    width: 250px;
  }
`;

export const ButtonIngresar = styled.button`
  box-shadow: inset -4px -4px 0px 0px #4aa52e;
  background: #92cd41;
  display: inline-block;
  position: relative;
  text-align: center;
  font-size: 15px;
  padding: 20px;
  font-family: "Press Start 2P", cursive;
  text-decoration: none;
  color: white;
  cursor: pointer;
  margin-top: 20px;

  &:focus {
    background: #76c442;
    {
      box-shadow: inset (-4px * 1.5) (-4px * 1.5) 0px 0px #4aa52e;
    }
  }

  &:active {
    box-shadow: inset 4px 4px 0px 0px #4aa52e;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }

  &:before {
    top: -6px;
    left: 0;
    border-top: 6px black solid;
    border-bottom: 6px black solid;
  }

  &:after {
    left: -6px;
    top: 0;
    border-left: 6px black solid;
    border-right: 6px black solid;
  }
  }
`;
