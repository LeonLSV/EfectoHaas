import React, { useRef, useState } from "react";
import { Col, Row } from "antd";
import {
  TextoCalculo,
  ContainerCalcular,
  Canales,
  ContainerEfecto,
  ContainerEfectoInput,
} from "./style";
import { Link } from "react-router-dom";
import Resultado from "../Resultados";

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
  //INPUTS
  const largoInput = useRef(0);
  const anchoInput = useRef(0);
  const distX = useRef(0);
  const distY = useRef(0);
  const paneoInput = useRef(0);
  const sampleInput = useRef(0);
  const temperaturaInput = useRef(0);

  //ESTADOS CANAL 1
  const [atenuacion, setAtenuacion] = useState(null);
  const [paneo, setPaneo] = useState(null);
  const [dly, setDly] = useState(null);
  const [samples, setSamples] = useState(null);
  //ESTADOS CANAL 2
  const [atenuacion2, setAtenuacion2] = useState(null);
  const [paneo2, setPaneo2] = useState(null);
  const [dly2, setDly2] = useState(null);
  const [samples2, setSamples2] = useState(null);
  //ESTADOS CANAL 3
  const [atenuacion3, setAtenuacion3] = useState(null);
  const [paneo3, setPaneo3] = useState(null);
  const [dly3, setDly3] = useState(null);
  const [samples3, setSamples3] = useState(null);
  //ESTADOS CANAL 4
  const [atenuacion4, setAtenuacion4] = useState(null);
  const [paneo4, setPaneo4] = useState(null);
  const [dly4, setDly4] = useState(null);
  const [samples4, setSamples4] = useState(null);

  //FUNCION
  const handleCalculador = () => {
    //Constante
    const temp = parseInt(temperaturaInput.current.value);
    const velocidadSonido = temp * 0.6 + 331.5;

    //cuentas
    const largo = parseInt(largoInput.current.value);
    const ancho = parseInt(anchoInput.current.value);
    const mitadAncho = ancho / 2;

    const distx = parseInt(distX.current.value);
    const disty = parseInt(distY.current.value);
    const restoYLeft = mitadAncho + disty;
    const restoYRight = ancho - mitadAncho - disty;
    const restoXBack = largo - distx;

    //Canal 1
    const potenciaDeX = Math.pow(distx, 2);
    const potenciaDeY = Math.pow(disty, 2);
    const raizCanal1 = Math.sqrt(potenciaDeX + potenciaDeY);
    const atenuacionPorDistancia = (Math.log10(raizCanal1) * 20).toFixed(2);
    const arcoTangente = Math.atan(disty / distx);
    const gradosPaneo = arcoTangente * (180 / Math.PI);

    const paneoEntrada = parseInt(paneoInput.current.value);
    const paneoFinal = (paneoEntrada * gradosPaneo) / 90;
    const dly = ((raizCanal1 / velocidadSonido) * 1000).toFixed(2);
    const sample = parseInt(sampleInput.current.value);
    const samples = (dly / (1000 / sample)).toFixed(2);

    //ASIGNACION
    setAtenuacion(atenuacionPorDistancia);
    setPaneo(paneoFinal);
    setDly(dly);
    setSamples(samples);

    //Canal 2
    const restoBack = (disty * restoXBack) / (largo + restoXBack);
    const restoBack2 = disty - restoBack;
    const raizCanal2 = Math.sqrt(
      Math.pow(restoBack, 2) + Math.pow(restoXBack, 2)
    );
    const raiz2Canal2 = Math.sqrt(Math.pow(restoBack2, 2) + Math.pow(largo, 2));
    const raizRaiz = raizCanal2 + raiz2Canal2;

    const atenuacionCanal2 = (Math.log10(raizRaiz) * 20).toFixed(2);
    const paneoAtras = restoBack2 / largo;
    const tangente2 = Math.atan(paneoAtras) * (180 / Math.PI);
    const paneo2 = ((tangente2 * paneoEntrada) / 90).toFixed(2);
    const dly2 = ((raizRaiz / velocidadSonido) * 1000).toFixed(2);

    const previoSample = 1000 / sample;
    const sample2 = (dly2 / previoSample).toFixed(2);

    //ASIGNACION
    setAtenuacion2(atenuacionCanal2);
    setPaneo2(paneo2);
    setDly2(dly2);
    setSamples2(sample2);

    //canal 3 derecha
    const restoY = distx * restoYRight;
    const restoY2 = mitadAncho + restoYRight;
    const result1 = restoY / restoY2;
    const result2 = distx - result1;
    const raiz1 = Math.sqrt(Math.pow(result1, 2) + Math.pow(restoYRight, 2));
    const raiz2 = Math.sqrt(Math.pow(result2, 2) + Math.pow(mitadAncho, 2));
    const sumaRaices = raiz1 + raiz2;
    const paneoRight = mitadAncho / result2;
    const tangente3 = Math.atan(paneoRight) * (180 / Math.PI);
    const atenuacionCanal3 = (Math.log10(sumaRaices) * 20).toFixed(2);
    const paneo3 = ((tangente3 * paneoEntrada) / 90).toFixed(2);
    const dly3 = ((sumaRaices / velocidadSonido) * 1000).toFixed(2);
    const sample3 = (dly3 / previoSample).toFixed(2);

    //ASIGNACION
    setAtenuacion3(atenuacionCanal3);
    setPaneo3(paneo3);
    setDly3(dly3);
    setSamples3(sample3);

    //canal 4 izquierda
    const restoYleft = distx * restoYLeft;
    const restoYmitad = mitadAncho + restoYLeft;
    const resultado1 = restoYleft / restoYmitad;
    const resultado2 = distx - resultado1;
    const raiz = Math.sqrt(Math.pow(restoYLeft, 2) + Math.pow(resultado1, 2));
    const raiz22 = Math.sqrt(Math.pow(mitadAncho, 2) + Math.pow(resultado2, 2));
    const sumaRaiz = raiz + raiz22;
    const pan = restoYLeft / resultado1;
    const tangente4 = Math.atan(pan) * (180 / Math.PI);
    const atenuacionCanal4 = (Math.log10(sumaRaiz) * 20).toFixed(2);
    const paneo4 = (((tangente4 * paneoEntrada) / 90) * -1).toFixed(2);
    const dly4 = ((sumaRaiz / velocidadSonido) * 1000).toFixed(2);
    const sample4 = (dly4 / previoSample).toFixed(2);

    //ASIGNACION
    setAtenuacion4(atenuacionCanal4);
    setPaneo4(paneo4);
    setDly4(dly4);
    setSamples4(sample4);
  };

  return (
    <>
      <Row>
        <Col span={24} style={{ textDecoration: "none", marginTop: "30px" }}>
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
              <TextoCalculo size={"10px"}>Largo</TextoCalculo>
              <ContainerEfectoInput>
                <input
                  type="number"
                  id="name_field"
                  className="nes-input"
                  ref={largoInput}
                  style={{ width: "80px", fontSize: "12px" }}
                />
              </ContainerEfectoInput>
            </Col>
            <Col span={12} style={centerCol}>
              <TextoCalculo size={"10px"}>Ancho</TextoCalculo>
              <ContainerEfectoInput>
                <input
                  type="number"
                  id="name_field"
                  className="nes-input"
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
              <TextoCalculo size={"10px"}>Dist en X</TextoCalculo>
              <ContainerEfectoInput>
                <input
                  type="number"
                  id="name_field"
                  className="nes-input"
                  ref={distX}
                  style={{ width: "80px", fontSize: "12px" }}
                />
              </ContainerEfectoInput>
            </Col>

            <Col span={12} style={centerCol}>
              <TextoCalculo size={"10px"}>Dist en Y</TextoCalculo>
              <ContainerEfectoInput>
                <input
                  type="number"
                  id="name_field"
                  className="nes-input"
                  ref={distY}
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
          <TextoCalculo size={"15px"}>Otros datos</TextoCalculo>
          <Col
            style={{
              display: "flex",
              flexDirection: "row",
            }}>
            <Col span={7} style={centerCol}>
              <TextoCalculo size={"10px"}>Paneo</TextoCalculo>
              <ContainerEfectoInput>
                <input
                  type="number"
                  id="name_field"
                  className="nes-input"
                  ref={paneoInput}
                  style={{ width: "90px", fontSize: "12px" }}
                />
              </ContainerEfectoInput>
            </Col>
            <Col span={7} style={centerCol}>
              <TextoCalculo size={"10px"}>Sample</TextoCalculo>
              <ContainerEfectoInput>
                <input
                  type="number"
                  id="name_field"
                  className="nes-input"
                  ref={sampleInput}
                  style={{ width: "110px", fontSize: "11px" }}
                />
              </ContainerEfectoInput>
            </Col>
            <Col span={7} style={centerCol}>
              <TextoCalculo size={"10px"}>Temperatura</TextoCalculo>
              <ContainerEfectoInput>
                <input
                  type="number"
                  id="name_field"
                  className="nes-input"
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
          <button
            type="button"
            onClick={handleCalculador}
            className="nes-btn is-primary">
            Calcular
          </button>
        </ContainerCalcular>
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
