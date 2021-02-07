import React from "react";
import { Col, Row } from "antd";

const Resultado = (props) => {
  return (
    <>
      <Row>
        <Col span={24}>
          <span className="nes-text is-disabled">Atenuación</span>
          <br />
          <span className="nes-text is-disabled">{props.atenuacion} dBs</span>
          <progress
            className="nes-progress is-primary"
            value={props.atenuacion}
            max="100"></progress>
          <span className="nes-text is-disabled">Paneo</span>
          <br />
          <span className="nes-text is-disabled">{props.atenuacion}</span>
          <progress
            className="nes-progress is-warning"
            value={props.atenuacion}
            max="100"></progress>
          <span className="nes-text is-disabled">Delay</span>
          <br />
          <span className="nes-text is-disabled">{props.atenuacion} ms</span>
          <progress
            className="nes-progress is-success"
            value={props.atenuacion}
            max="100"></progress>
          <span className="nes-text is-disabled">Delay en Samples</span>
          <br />
          <span className="nes-text is-disabled">{props.atenuacion}</span>
          <progress
            className="nes-progress is-pattern"
            value={props.atenuacion}
            max="100"></progress>
        </Col>
      </Row>
    </>
  );
};

export default Resultado;
