import React from "react";
import { Row, Col } from "antd";
import logonegro from "../../images/logonegro.png";
import {
  TitleHome,
  LogoHome,
  AnimationButtonIngresar,
  ButtonIngresar,
  AnchorLogo,
} from "./style";
import { Link } from "react-router-dom";

const centerTodo = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0",
  padding: "0",
};

export const Title = () => {
  return (
    <>
      <Row>
        <Col span={24} style={centerTodo}>
          <TitleHome margintop={"78px"}>Efecto</TitleHome>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={centerTodo}>
          <TitleHome margintop={"-30px"}>Haas</TitleHome>
        </Col>
      </Row>
      <Row style={centerTodo}>
        <Link to="/intro">
          <Col span={24} style={(centerTodo, { textDecoration: "none" })}>
            <AnimationButtonIngresar>
              <ButtonIngresar type="button" className="nes-btn is-success">
                Ingresar
              </ButtonIngresar>
            </AnimationButtonIngresar>
          </Col>
          <Col span={24} style={centerTodo}>
            <AnimationButtonIngresar>
              <i className="nes-jp-logo"></i>
            </AnimationButtonIngresar>
          </Col>
        </Link>
      </Row>
      <Row>
        <Col span={24} style={centerTodo}>
          <AnchorLogo
            href="https://leonsonidovirtual.com/"
            target="__blank"
            rel="noopener noreferer">
            <LogoHome src={logonegro} alt="Logo LSV" />
          </AnchorLogo>
        </Col>
      </Row>
    </>
  );
};
