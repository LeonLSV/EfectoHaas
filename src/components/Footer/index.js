import React from "react";
import { Row, Col } from "antd";
import { ContainerFooter } from "./styled";

const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <Row
          justify="center"
          align="middle"
          style={{
            marginTop: "100px",
          }}>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <i class="nes-icon is-large like"></i>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            ¡Seguime en mis redes!
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: "20px" }}>
          <Col style={{ margin: "20px 20px" }}>
            <a
              href="https://www.instagram.com/leonsonidovirtual/?hl=es-la"
              target="__blank"
              rel="noopener noreferer">
              <i class="nes-icon instagram is-large"></i>
            </a>
          </Col>
          <Col style={{ margin: "20px 20px" }}>
            <a
              href="https://www.youtube.com/channel/UCmY7818_znOXvvrggABd3CQ"
              target="__blank"
              rel="noopener noreferer">
              <i class="nes-icon youtube is-large"></i>
            </a>
          </Col>
          <Col style={{ margin: "20px 20px" }}>
            <a
              href="https://www.facebook.com/LeonSonidoVirtual"
              target="__blank"
              rel="noopener noreferer">
              <i class="nes-icon facebook is-large"></i>
            </a>
          </Col>
          <Col style={{ margin: "20px 20px" }}>
            <a
              href="https://www.linkedin.com/in/ramiro-contreras-le%C3%B3n/"
              target="__blank"
              rel="noopener noreferer">
              <i class="nes-icon linkedin is-large"></i>
            </a>
          </Col>
          <Col style={{ margin: "20px 20px" }}>
            <a
              href="https://twitter.com/virtual_sonido"
              target="__blank"
              rel="noopener noreferer">
              <i class="nes-icon twitter is-large"></i>
            </a>
          </Col>
        </Row>
      </ContainerFooter>
    </>
  );
};

export default Footer;
