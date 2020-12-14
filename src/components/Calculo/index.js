import React from "react";
import { Col, Row, InputNumber } from "antd";
import { TextoCalculo } from "./style";
import { Link } from "react-router-dom";

function onChange(value) {
  console.log("changed", value);
}

const centerTodo = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "20px",
};

export const Calculo = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Link to="/">
            <TextoCalculo size={"40px"}>Efecto Haas</TextoCalculo>
          </Link>
        </Col>
      </Row>

      <Row justify="space-around" align="middle">
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 6, offset: 0 }}
          xl={{ span: 6, offset: 0 }}
          style={centerTodo}>
          <TextoCalculo size={"15px"}>Dimensión recinto</TextoCalculo>
          <Col
            style={{
              display: "flex",
              flexDirection: "row",
            }}>
            <Col span={12} style={{ margin: "0 5px" }}>
              <TextoCalculo size={"10px"}>Largo</TextoCalculo>
              <InputNumber
                min={0}
                max={20}
                defaultValue={16}
                onChange={onChange}
                style={{
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: "10px",
                }}
              />
            </Col>
            <Col span={12}>
              <TextoCalculo size={"10px"}>Ancho</TextoCalculo>
              <InputNumber
                min={0}
                max={20}
                defaultValue={10}
                onChange={onChange}
                style={{
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: "10px",
                }}
              />
            </Col>
          </Col>
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 6, offset: 0 }}
          xl={{ span: 6, offset: 0 }}
          style={centerTodo}>
          <TextoCalculo size={"15px"}>Dist instrumento</TextoCalculo>
          <Col
            style={{
              display: "flex",
              flexDirection: "row",
            }}>
            <Col span={12} style={{ margin: "0 5px" }}>
              <TextoCalculo size={"10px"}>Dist en X</TextoCalculo>
              <InputNumber
                min={0}
                max={30}
                defaultValue={4}
                onChange={onChange}
                style={{
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: "10px",
                }}
              />
            </Col>

            <Col span={12}>
              <TextoCalculo size={"10px"}>Dist en Y</TextoCalculo>
              <InputNumber
                min={0}
                max={30}
                defaultValue={2}
                onChange={onChange}
                style={{
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: "10px",
                }}
              />
            </Col>
          </Col>
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 6, offset: 0 }}
          xl={{ span: 6, offset: 0 }}
          style={centerTodo}>
          <TextoCalculo size={"15px"}>Otros datos</TextoCalculo>
          <Col
            style={{
              display: "flex",
              flexDirection: "row",
            }}>
            <Col span={7} style={{ margin: "0 5px" }}>
              <TextoCalculo size={"10px"}>Paneo</TextoCalculo>
              <InputNumber
                min={0}
                max={100}
                defaultValue={100}
                onChange={onChange}
                style={{
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: "10px",
                }}
              />
            </Col>
            <Col span={7} style={{ margin: "0 5px" }}>
              <TextoCalculo size={"10px"}>Sample</TextoCalculo>
              <InputNumber
                min={0}
                max={192000}
                defaultValue={48000}
                onChange={onChange}
                style={{
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: "10px",
                }}
              />
            </Col>
            <Col span={7} style={{ margin: "0 5px" }}>
              <TextoCalculo size={"10px"}>Temperatura</TextoCalculo>
              <InputNumber
                min={0}
                max={80}
                defaultValue={20}
                onChange={onChange}
                style={{
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: "10px",
                }}
              />
            </Col>
          </Col>
        </Col>
      </Row>
    </>
  );
};
