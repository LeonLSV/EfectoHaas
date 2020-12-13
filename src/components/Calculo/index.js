import React from "react";
import { Col, Row, InputNumber } from "antd";
import { TextoCalculo } from "./style";
import "./calculo.css";
function onChange(value) {
  console.log("changed", value);
}

const centerTodo = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const Calculo = () => {
  return (
    <>
      <Row>
        <Col span={24} style={centerTodo}>
          <TextoCalculo size={"40px"}>Efecto Haas</TextoCalculo>
        </Col>
      </Row>
      <Row>
        <Col span={4} offset={3} style={centerTodo}>
          <TextoCalculo>Dimensiones del recinto</TextoCalculo>
        </Col>
        <Col span={4} offset={2} style={centerTodo}>
          <TextoCalculo>Distancia al instrumento</TextoCalculo>
        </Col>
        <Col span={6} offset={2} style={centerTodo}>
          <TextoCalculo>Otros datos</TextoCalculo>
        </Col>
      </Row>

      <Row>
        <Col span={2} offset={3} style={centerTodo}>
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
        <Col span={2} style={centerTodo}>
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

        <Col span={2} offset={2} style={centerTodo}>
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
        <Col span={2} style={centerTodo}>
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

        <Col span={2} offset={2} style={centerTodo}>
          <TextoCalculo size={"10px"}>Paneo máx</TextoCalculo>
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
        <Col span={2} style={centerTodo}>
          <TextoCalculo size={"10px"}>Sample Rate</TextoCalculo>
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
        <Col span={2} style={centerTodo}>
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
      </Row>
    </>
  );
};
