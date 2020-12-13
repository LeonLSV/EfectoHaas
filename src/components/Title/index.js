import React from "react";
import { Row, Col } from "antd";
import logonegro from "../../images/logonegro.png";
import { TitleHome, LogoHome, ButtonIngresar } from "./style";
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
          <TitleHome margintop={"120px"}>Efecto</TitleHome>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={centerTodo}>
          <TitleHome margintop={"-50px"}>Haas</TitleHome>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={centerTodo}>
          <Link to="/intro">
            <ButtonIngresar type="button">Ingresar</ButtonIngresar>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={centerTodo}>
          <LogoHome src={logonegro} alt="Logo LSV" />
        </Col>
      </Row>
    </>
  );
};
