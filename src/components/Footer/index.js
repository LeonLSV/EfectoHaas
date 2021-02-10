import React, { useState } from "react";
import { Row, Col, Modal, Tooltip } from "antd";
import { ContainerFooter, Anchor } from "./styled";

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
        <Row
          justify="center"
          align="middle"
          style={{
            marginTop: "20px",
          }}>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "60px",
            }}>
            <i
              style={{ padding: "10px" }}
              className="nes-icon heart is-large"
            />
            <Anchor onClick={showModal}>Regalame un cafe</Anchor>

            <Modal
              title="Gracias por tu apoyo."
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}>
              <i class="nes-icon is-small heart"></i>
              <a
                href="https://paypal.me/LeonSV?locale.x=es_XC"
                target="__blank"
                rel="noreferer noopener">
                Paypal
              </a>
              <br />
              <Tooltip
                title="La moneda es en peso Colombiano pero tu banco se encarga de hacer la conversión para cobrarte en tu moneda local."
                placeholder="top">
                <i class="nes-icon is-small heart"></i>
                <a
                  href="https://checkout.wompi.co/l/E68QBQ"
                  target="__blank"
                  rel="noreferer noopener">
                  Tarjeta de Crédito
                </a>
              </Tooltip>
              <br />
              <i class="nes-icon is-small heart"></i>
              <a
                href="https://checkout.wompi.co/l/E68QBQ"
                target="__blank"
                rel="noreferer noopener">
                Nequi - PSE - Bancolombia
              </a>
              <br />
              <Tooltip
                title="Banco Nación - CBU: 0110461930046103705797 - alias: Sonido.virtual - Caja de ahorro $: 31004610370579"
                placement="top">
                <i class="nes-icon is-small heart"></i>
                <a
                  href="https://www.bna.com.ar"
                  target="__blank"
                  rel="noreferer noopener">
                  Transferencia Argentina
                </a>
              </Tooltip>
            </Modal>
          </Col>
        </Row>
      </ContainerFooter>
    </>
  );
};

export default Footer;
