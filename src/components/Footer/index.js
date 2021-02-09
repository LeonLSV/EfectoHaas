import React from "react";
import { Row, Col } from "antd";
import { ContainerFooter, Anchor } from "./styled";

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
            <i className="nes-icon is-large like"></i>
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
            <Anchor
              href="https://www.instagram.com/leonsonidovirtual/?hl=es-la"
              target="__blank"
              rel="noopener noreferer">
              <i className="nes-icon instagram is-large"></i>
            </Anchor>
          </Col>
          <Col style={{ margin: "20px 20px" }}>
            <Anchor
              href="https://www.youtube.com/channel/UCmY7818_znOXvvrggABd3CQ"
              target="__blank"
              rel="noopener noreferer">
              <i className="nes-icon youtube is-large"></i>
            </Anchor>
          </Col>
          <Col style={{ margin: "20px 20px" }}>
            <Anchor
              href="https://www.facebook.com/LeonSonidoVirtual"
              target="__blank"
              rel="noopener noreferer">
              <i className="nes-icon facebook is-large"></i>
            </Anchor>
          </Col>
          <Col style={{ margin: "20px 20px" }}>
            <Anchor
              href="https://www.linkedin.com/in/ramiro-contreras-le%C3%B3n/"
              target="__blank"
              rel="noopener noreferer">
              <i className="nes-icon linkedin is-large"></i>
            </Anchor>
          </Col>
          <Col style={{ margin: "20px 20px" }}>
            <Anchor
              href="https://twitter.com/virtual_sonido"
              target="__blank"
              rel="noopener noreferer">
              <i className="nes-icon twitter is-large"></i>
            </Anchor>
          </Col>
        </Row>
      </ContainerFooter>
    </>
  );
};

export default Footer;
