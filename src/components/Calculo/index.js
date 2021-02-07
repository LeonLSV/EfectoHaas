import React, { useState, useRef } from "react";
import { Col, Row } from "antd";
import { TextoCalculo, InputCal, ContainerCalcular } from "./style";
import { Link } from "react-router-dom";
import Resultado from "../Resultados";

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

  let velocidadSonido = 343.5;

  const handleCalculador = () => {
    const largo = parseInt(largoInput.current.value);
    const ancho = parseInt(anchoInput.current.value);
    const mitadAncho = ancho / 2;

    const distx = parseInt(distX.current.value);
    const disty = parseInt(distY.current.value);
    const restoYLeft = mitadAncho + disty;
    const restoYRight = ancho - mitadAncho - disty;
    const restoXBack = largo - distx;

    //Raices Canal 1
    const potenciaDeX = Math.pow(distx, 2);
    const potenciaDeY = Math.pow(disty, 2);
    const raizCanal1 = Math.sqrt(potenciaDeX + potenciaDeY);

    console.log(raizCanal1);
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
              <InputCal type="number" value="10" ref={largoInput} />
            </Col>
            <Col span={12}>
              <TextoCalculo size={"10px"}>Ancho</TextoCalculo>
              <InputCal type="number" value="6" ref={anchoInput} />
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
              <InputCal type="number" value="2" ref={distX} />
            </Col>

            <Col span={12}>
              <TextoCalculo size={"10px"}>Dist en Y</TextoCalculo>
              <InputCal type="number" value="2" ref={distY} />
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
              <InputCal type="number" value="45" ref={paneoInput} />
            </Col>
            <Col span={7} style={{ margin: "0 5px" }}>
              <TextoCalculo size={"10px"}>Sample</TextoCalculo>
              <InputCal type="number" value="20" ref={sampleInput} />
            </Col>
            <Col span={7} style={{ margin: "0 5px" }}>
              <TextoCalculo size={"10px"}>Temperatura</TextoCalculo>
              <InputCal type="number" value="48000" ref={temperaturaInput} />
            </Col>
          </Col>
        </Col>
      </Row>
      <Row justify="center" styled={centerTodo}>
        <ContainerCalcular>
          <button
            type="button"
            onClick={handleCalculador}
            className="nes-btn is-primary">
            Calcular
          </button>
        </ContainerCalcular>
      </Row>
      <Row justify="center" gutter={32}>
        <Col lg={5}>
          <Resultado atenuacion={"19"} />
        </Col>
        <Col lg={5}>
          <Resultado atenuacion="30" />
        </Col>
        <Col lg={5}>
          <Resultado atenuacion="60" />
        </Col>
        <Col lg={5}>
          <Resultado atenuacion="60" />
        </Col>
      </Row>
    </>
  );
};
