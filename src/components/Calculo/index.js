import React, { useRef, useState } from "react";
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

  //CONSTANTE

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
    const sample22 = sample2 + samples;

    //ASIGNACION
    setAtenuacion2(atenuacionCanal2);
    setPaneo2(paneo2);
    setDly2(dly2);
    setSamples2(sample2);

    //CONSOLA
    console.log(sample22);
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
            <Col span={12} style={centerCol}>
              <TextoCalculo size={"10px"}>Largo</TextoCalculo>
              <input
                type="number"
                id="name_field"
                class="nes-input"
                ref={largoInput}
                style={{ width: "80px", fontSize: "12px" }}
              />
            </Col>
            <Col span={12} style={centerCol}>
              <TextoCalculo size={"10px"}>Ancho</TextoCalculo>
              <input
                type="number"
                id="name_field"
                class="nes-input"
                ref={anchoInput}
                style={{ width: "80px", fontSize: "12px" }}
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
            <Col span={12} style={centerCol}>
              <TextoCalculo size={"10px"}>Dist en X</TextoCalculo>
              <input
                type="number"
                id="name_field"
                class="nes-input"
                ref={distX}
                style={{ width: "80px", fontSize: "12px" }}
              />
            </Col>

            <Col span={12} style={centerCol}>
              <TextoCalculo size={"10px"}>Dist en Y</TextoCalculo>
              <input
                type="number"
                id="name_field"
                class="nes-input"
                ref={distY}
                style={{ width: "80px", fontSize: "12px" }}
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
            <Col span={7} style={centerCol}>
              <TextoCalculo size={"10px"}>Paneo</TextoCalculo>
              <input
                type="number"
                id="name_field"
                class="nes-input"
                ref={paneoInput}
                style={{ width: "90px", fontSize: "12px" }}
              />
            </Col>
            <Col span={7} style={centerCol}>
              <TextoCalculo size={"10px"}>Sample</TextoCalculo>
              <input
                type="number"
                id="name_field"
                class="nes-input"
                ref={sampleInput}
                style={{ width: "110px", fontSize: "11px" }}
              />
            </Col>
            <Col span={7} style={centerCol}>
              <TextoCalculo size={"10px"}>Temperatura</TextoCalculo>
              <input
                type="number"
                id="name_field"
                class="nes-input"
                ref={temperaturaInput}
                style={{ width: "80px", fontSize: "12px" }}
              />
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
      <Row justify="center">
        <Col lg={5}>
          <Resultado
            atenuacion={atenuacion}
            paneo={paneo}
            delay={dly}
            samples={samples}
          />
        </Col>
        <Col lg={5}>
          <Resultado
            atenuacion={atenuacion2}
            paneo={paneo2}
            delay={dly2}
            samples={samples2}
          />
        </Col>
        <Col lg={5}>
          <Resultado
            atenuacion={atenuacion}
            paneo={paneo}
            delay={dly}
            samples={samples}
          />
        </Col>
        <Col lg={5}>
          <Resultado
            atenuacion={atenuacion}
            paneo={paneo}
            delay={dly}
            samples={samples}
          />
        </Col>
      </Row>
    </>
  );
};
