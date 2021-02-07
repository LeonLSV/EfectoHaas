import React, { useState, useRef } from "react";
import { Col, Row } from "antd";
import { TextoCalculo } from "./style";
import { Link } from "react-router-dom";

const centerTodo = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "20px",
};

export const Calculo = () => {
  const largoInput = useRef(null);
  const anchoInput = useRef(null);
  const distX = useRef(null);
  const distY = useRef(null);
  const paneoInput = useRef(null);
  const sampleInput = useRef(null);
  const temperaturaInput = useRef(null);

  const [mitad, setMitad] = useState("");

  const calculador = () => {
    const valor = parseInt(largoInput.current.value);
    const valor2 = parseInt(anchoInput.current.value);
    const resultado = valor / valor2;
    console.log(resultado);
    setMitad(resultado);
  };

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
              <input type="number" ref={largoInput} />
            </Col>
            <Col span={12}>
              <TextoCalculo size={"10px"}>Ancho</TextoCalculo>
              <input type="number" ref={anchoInput} />
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
              <input type="number" ref={distX} />
            </Col>

            <Col span={12}>
              <TextoCalculo size={"10px"}>Dist en Y</TextoCalculo>
              <input type="number" ref={distY} />
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
              <input type="number" ref={paneoInput} />
            </Col>
            <Col span={7} style={{ margin: "0 5px" }}>
              <TextoCalculo size={"10px"}>Sample</TextoCalculo>
              <input type="number" ref={sampleInput} />
            </Col>
            <Col span={7} style={{ margin: "0 5px" }}>
              <TextoCalculo size={"10px"}>Temperatura</TextoCalculo>
              <input type="number" ref={temperaturaInput} />
            </Col>
          </Col>
        </Col>
      </Row>
      <button onClick={calculador}>Calcula</button>
      <h1>{mitad}</h1>
    </>
  );
};
