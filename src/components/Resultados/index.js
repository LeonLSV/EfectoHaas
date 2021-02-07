import React from "react";
import { Col, Row } from "antd";

const Resultado = (props) => {
  return (
    <>
      <Row>
        <Col span={24} style={{ padding: "20px" }}>
          <span className="nes-text is-disabled">Atenuación</span>
          <br />
          <span className="nes-text is-disabled">{props.atenuacion} dBs</span>
          <progress
            className="nes-progress is-primary"
            value={props.atenuacion}
            max="60"></progress>
          <span className="nes-text is-disabled">Paneo</span>
          <br />
          <span className="nes-text is-disabled">{props.paneo} pan</span>
          <progress
            className="nes-progress is-warning"
            value={props.paneo}
            max="100"></progress>
          <span className="nes-text is-disabled">Delay</span>
          <br />
          <span className="nes-text is-disabled">{props.delay} ms</span>
          <progress
            className="nes-progress is-success"
            value={props.delay}
            max="50"></progress>
          <span className="nes-text is-disabled">Samples</span>
          <br />
          <span className="nes-text is-disabled">{props.samples}</span>
          <progress
            className="nes-progress is-pattern"
            value={props.samples}
            max="1000"></progress>
        </Col>
      </Row>
    </>
  );
};

export default Resultado;
