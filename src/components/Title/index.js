import React from "react";
import { Row, Col } from "antd";
import logonegro from "../../images/logonegro.png";
import { TitleHome, LogoHome } from "./style";

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
          {/* <a class="nes-btn" href="#">
            Normal
          </a> */}
          <button type="button" className="nes-btn is-success">
            Ingresar
          </button>
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
