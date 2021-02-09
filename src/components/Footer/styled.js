import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const ContainerFooter = styled.footer`
  ${fadeIn({ time: "3s" })}
`;

export const Anchor = styled.a`
  &:focus {
    border-bottom: 2px solid white;
  }
  &:hover {
    border-bottom: 2px solid white;
  }
`;
