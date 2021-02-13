import React, { useContext } from "react";
import { Col, Row, Tooltip } from "antd";
import {
  TextoCalculo,
  ContainerCalcular,
  Canales,
  ContainerEfecto,
  ContainerEfectoInput,
  ButtonFocus,
} from "./style";
import { Link } from "react-router-dom";
import Resultado from "../Resultados";
import Draw from "../Draw";

import { UserContext } from "../Cuentas";

const centerTodo = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "20px",
};

const centerCol = {
  margin: "0 5px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const Calculo = () => {
  let {
    valorIniciallargo,
    handleInput,
    largoInput,
    valorInicialancho,
    anchoInput,
    valorInicialY,
    distYy,
    valorInicialX,
    distXx,
    valorInicialpaneo,
    paneoInput,
    valorInicialsample,
    sampleInput,
    valorInicialtemperatura,
    temperaturaInput,
    handleCalculador,
    atenuacion,
    paneo,
    dly,
    samples,
    atenuacion2,
    paneo2,
    dly2,
    samples2,
    atenuacion3,
    paneo3,
    dly3,
    samples3,
    atenuacion4,
    paneo4,
    dly4,
    samples4,
  } = useContext(UserContext);

  return (
    <>
      <Row justify="center">
        <Col
          span={8}
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}>
          <Link
            to="/"
            style={{
              outline: "none",
              textDecoration: "none",
            }}>
            <TextoCalculo size={"40px"}>Efecto Haas</TextoCalculo>
          </Link>
        </Col>
      </Row>

      <Row justify="space-around" align="middle">
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 8, offset: 0 }}
          xl={{ span: 8, offset: 0 }}
          style={centerTodo}>
          <TextoCalculo size={"15px"}>Dimensión recinto</TextoCalculo>
          <Col
            style={{
              display: "flex",
              flexDirection: "row",
            }}>
            <Col span={12} style={centerCol}>
              <Tooltip
                title="Largo o Profundo (en metros) del cuarto"
                placement="top">
                <TextoCalculo size={"10px"}>Largo</TextoCalculo>
              </Tooltip>
              <ContainerEfectoInput>
                <input
                  type="number"
                  id="largo"
                  label="largo"
                  className="nes-input"
                  value={valorIniciallargo}
                  onChange={handleInput}
                  ref={largoInput}
                  style={{ width: "80px", fontSize: "12px" }}
                />
              </ContainerEfectoInput>
            </Col>
            <Col span={12} style={centerCol}>
              <Tooltip title="Ancho (en metros) del cuarto" placement="top">
                <TextoCalculo size={"10px"}>Ancho</TextoCalculo>
              </Tooltip>
              <ContainerEfectoInput>
                <input
                  type="number"
                  id="Ancho"
                  label="ancho"
                  className="nes-input"
                  value={valorInicialancho}
                  onChange={handleInput}
                  ref={anchoInput}
                  style={{ width: "80px", fontSize: "12px" }}
                />
              </ContainerEfectoInput>
            </Col>
          </Col>
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 8, offset: 0 }}
          xl={{ span: 8, offset: 0 }}
          style={centerTodo}>
          <TextoCalculo size={"15px"}>Dist instrumento</TextoCalculo>

          <Col
            style={{
              display: "flex",
              flexDirection: "row",
            }}>
            <Col span={12} style={centerCol}>
              <Tooltip
                title="Distancia al instrumento en linea recta desde el borde del cuarto"
                placement="top">
                <TextoCalculo size={"10px"}>Dist en Y</TextoCalculo>
              </Tooltip>
              <ContainerEfectoInput>
                <input
                  type="number"
                  label="distY"
                  id="Y"
                  className="nes-input"
                  value={valorInicialY}
                  onChange={handleInput}
                  ref={distYy}
                  style={{ width: "80px", fontSize: "12px" }}
                />
              </ContainerEfectoInput>
            </Col>

            <Col span={12} style={centerCol}>
              <Tooltip
                title="Distancia lateral al instrumento desde el centro del cuarto"
                placement="top">
                <TextoCalculo size={"10px"}>Dist en X</TextoCalculo>
              </Tooltip>
              <ContainerEfectoInput>
                <input
                  value={valorInicialX}
                  onChange={handleInput}
                  type="number"
                  label="distX"
                  id="X"
                  className="nes-input"
                  ref={distXx}
                  style={{ width: "90px", fontSize: "12px" }}
                />
              </ContainerEfectoInput>
            </Col>
          </Col>
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 8, offset: 0 }}
          xl={{ span: 8, offset: 0 }}
          style={centerTodo}>
          <TextoCalculo size={"15px"}>Otros datos</TextoCalculo>
          <Col
            style={{
              display: "flex",
              flexDirection: "row",
            }}>
            <Col span={7} style={centerCol}>
              <Tooltip
                title="Paneo máximo permitido por tu DAW o consola (100)"
                placement="top">
                <TextoCalculo size={"10px"}>Paneo</TextoCalculo>
              </Tooltip>
              <ContainerEfectoInput>
                <input
                  value={valorInicialpaneo}
                  onChange={handleInput}
                  label="paneo"
                  type="number"
                  id="paneo"
                  className="nes-input"
                  ref={paneoInput}
                  style={{ width: "90px", fontSize: "12px" }}
                />
              </ContainerEfectoInput>
            </Col>
            <Col span={7} style={centerCol}>
              <Tooltip
                title="Sample Rate usado en el proyecto (48000)"
                placement="top">
                <TextoCalculo size={"10px"}>Sample</TextoCalculo>
              </Tooltip>
              <ContainerEfectoInput>
                <input
                  value={valorInicialsample}
                  onChange={handleInput}
                  type="number"
                  id="sample"
                  className="nes-input"
                  ref={sampleInput}
                  style={{ width: "110px", fontSize: "11px" }}
                />
              </ContainerEfectoInput>
            </Col>
            <Col span={7} style={centerCol}>
              <Tooltip
                title="Temperatura ambiente del cuarto en grados C° (20)"
                placement="top">
                <TextoCalculo size={"10px"}>Temperatura</TextoCalculo>
              </Tooltip>
              <ContainerEfectoInput>
                <input
                  label="temperatura"
                  type="number"
                  id="temperatura"
                  className="nes-input"
                  value={valorInicialtemperatura}
                  onChange={handleInput}
                  ref={temperaturaInput}
                  style={{ width: "80px", fontSize: "12px" }}
                />
              </ContainerEfectoInput>
            </Col>
          </Col>
        </Col>
      </Row>
      <Row justify="center" styled={centerTodo}>
        <ContainerCalcular>
          <ButtonFocus
            type="button"
            onClick={handleCalculador}
            className="nes-btn is-primary">
            Calcular
          </ButtonFocus>
        </ContainerCalcular>
      </Row>

      <Row justify="center" align="middle" style={{ margin: "30px 0" }}>
        <Col>
          <Draw
            largo={valorIniciallargo * 40}
            ancho={valorInicialancho * 40}
            izq={valorInicialY * -40}
            der={valorInicialX * -40}
            margi={valorInicialancho * 18}
          />
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: "50px" }}>
        <Col lg={5}>
          <Canales>
            <span className="nes-text" style={{ color: "white" }}>
              Canal Principal
            </span>
          </Canales>
          <ContainerEfecto>
            <Resultado
              atenuacion={atenuacion}
              paneo={paneo}
              delay={dly}
              samples={samples}
            />
          </ContainerEfecto>
        </Col>
        <Col lg={5}>
          <Canales>
            <span className="nes-text" style={{ color: "white" }}>
              Reflexión Atras
            </span>
          </Canales>
          <ContainerEfecto>
            <Resultado
              atenuacion={atenuacion2}
              paneo={paneo2}
              delay={dly2}
              samples={samples2}
            />
          </ContainerEfecto>
        </Col>
        <Col lg={5}>
          <Canales>
            <span className="nes-text" style={{ color: "white" }}>
              Reflexión DER
            </span>
          </Canales>{" "}
          <ContainerEfecto>
            <Resultado
              atenuacion={atenuacion3}
              paneo={paneo3}
              delay={dly3}
              samples={samples3}
            />{" "}
          </ContainerEfecto>
        </Col>
        <Col lg={5}>
          <Canales>
            <span className="nes-text" style={{ color: "white" }}>
              Reflexión IZQ
            </span>
          </Canales>
          <ContainerEfecto>
            <Resultado
              atenuacion={atenuacion4}
              paneo={paneo4}
              delay={dly4}
              samples={samples4}
            />
          </ContainerEfecto>
        </Col>
      </Row>
    </>
  );
};
