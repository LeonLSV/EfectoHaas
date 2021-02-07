import { css, keyframes } from "styled-components";

const FadeInKeyframes = keyframes`
  from{
    transform: translateY(-40px);
    opacity: 0;
  }
  to{
    
    opacity: 100;
  }
`;

const FadeInLeft = keyframes`
  from{
    transform: translateX(3000px);
    filter: blur(5px);
    opacity: 0;
  }
  to{
    transform: translateX(0px);
    filter: blur(0);
    opacity: 100;
  }
`;

const FadeInRight = keyframes`
  from{
    transform: translateX(-1000px);
    filter: blur(5px);
    opacity: 0;
  }
  to{
    transform: translateX(0px);
    filter: blur(0);
    opacity: 100;
  }
`;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${FadeInKeyframes} ${type};
  `;

export const fadeInLeft = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${FadeInLeft} ${type};
  `;

export const fadeInRight = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${FadeInRight} ${type};
  `;
