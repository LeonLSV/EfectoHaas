import React from "react";
import { Row, Col } from "antd";
import logonegro from "../../images/logonegro.png";
import { TitleHome, LogoHome } from "./style";

const centerTodo = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0",
};

export const Title = () => {
  return (
    <>
      <Row>
        <Col span={24} style={centerTodo}>
          <TitleHome margintop={"150px"}>Efecto</TitleHome>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={centerTodo}>
          <TitleHome margintop={"-50px"}>Haas</TitleHome>
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