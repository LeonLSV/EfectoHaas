import React from "react";
import { Col, Row } from "antd";

const Resultado = (props) => {
  return (
    <>
      <Row>
        <Col span={24} style={{ padding: "20px" }}>
          <span className="nes-text">Atenuación</span>
          <br />
          <span className="nes-text " style={{ color: "white" }}>
            {props.atenuacion} dBs
          </span>
          <progress
            className="nes-progress is-primary"
            value={props.atenuacion}
            max="60"></progress>
          <span className="nes-text">Paneo</span>
          <br />
          <span className="nes-text " style={{ color: "white" }}>
            {props.paneo} pan
          </span>
          <progress
            className="nes-progress is-warning"
            value={props.paneo}
            max="100"></progress>
          <span className="nes-text">Delay</span>
          <br />
          <span className="nes-text " style={{ color: "white" }}>
            {props.delay} ms
          </span>
          <progress
            className="nes-progress is-success"
            value={props.delay}
            max="80"></progress>
          <span className="nes-text">Samples</span>
          <br />
          <span className="nes-text " style={{ color: "white" }}>
            {props.samples}
          </span>
          <progress
            className="nes-progress is-pattern"
            value={props.samples}
            max="4000"></progress>
        </Col>
      </Row>
    </>
  );
};

export default Resultado;
