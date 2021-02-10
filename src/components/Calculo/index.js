import React, { useRef, useState } from "react";
import { Col, Row, Tooltip, Modal, Image } from "antd";
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
import mapa from "../../images/mapa.png";
import Draw from "../Draw";

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
  const [valorIniciallargo, setValoriniciallargo] = useState("6");
  const [valorInicialancho, setValorInicialancho] = useState("12");
  const [valorInicialY, setValorInicialY] = useState("2");
  const [valorInicialX, setValorInicialX] = useState("2");
  const [valorInicialpaneo, setValorInicialpaneo] = useState("45");
  const [valorInicialsample, setValorInicialsample] = useState("48000");
  const [valorInicialtemperatura, setValorInicialtemperatura] = useState("20");

  const handleInput = () => {
    setValoriniciallargo(parseInt(largoInput.current.value));
    setValorInicialancho(parseInt(anchoInput.current.value));
    setValorInicialY(parseInt(distYy.current.value));
    setValorInicialX(parseInt(distXx.current.value));
    setValorInicialpaneo(parseInt(paneoInput.current.value));
    setValorInicialsample(parseInt(sampleInput.current.value));
    setValorInicialtemperatura(parseInt(temperaturaInput.current.value));
  };

  const largoInput = useRef(null);
  const anchoInput = useRef(null);
  const distYy = useRef(null);
  const distXx = useRef(null);
  const paneoInput = useRef(null);
  const sampleInput = useRef(null);
  const temperaturaInput = useRef(null);

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
    const distYY = parseInt(distYy.current.value);
    const distXX = parseInt(distXx.current.value);
    const sample = parseInt(sampleInput.current.value);
    const paneoEntrada = parseInt(paneoInput.current.value);

    if (
      largo <= 0 ||
      ancho <= 0 ||
      distYY <= 0 ||
      sample <= 0 ||
      paneoEntrada <= 0 ||
      temp <= 0
    ) {
      alert(
        "Por favor ingrese números mayores a 0 (Excepto en Dist X que si permite valores negativos y el 0)"
      );
    } else if (distYY > largo) {
      alert("El valor de Dist Y no puede ser mayor al largo del recinto.");
    } else if (distXX > ancho / 2) {
      alert(
        "El valor de Dist X no puede ser mayor a la mitad del ancho del recinto."
      );
    } else if (distXX <= ancho / -2) {
      alert(
        "El valor de Dist X no puede ser mayor o igual a la mitad del ancho del recinto."
      );
    } else if (paneoEntrada > 100) {
      alert("El paneo no puede ser mayor de 100");
    } else if (temp > 60) {
      alert("Epa, ¿En donde vivis? ¿Estás Seguro que la temperatura es esa?");
    } else if (temp < -30) {
      alert("Revisa el valor de grados");
    } else {
      const mitadAncho = ancho / 2;
      const restoYLeft = mitadAncho + distXX;
      const restoYRight = ancho - mitadAncho - distXX;
      const restoXBack = largo - distYY;
      //Canal 1
      const potenciaDeX = Math.pow(distYY, 2);
      const potenciaDeY = Math.pow(distXX, 2);
      const raizCanal1 = Math.sqrt(potenciaDeX + potenciaDeY);
      const atenuacionPorDistancia = (Math.log10(raizCanal1) * 20).toFixed(2);
      const arcoTangente = Math.atan(distXX / distYY);
      const gradosPaneo = arcoTangente * (180 / Math.PI);

      const paneoFinal = ((paneoEntrada * gradosPaneo) / 90).toFixed(2);
      const dly = ((raizCanal1 / velocidadSonido) * 1000).toFixed(2);
      const samples = (dly / (1000 / sample)).toFixed(2);

      //ASIGNACION
      setAtenuacion(atenuacionPorDistancia);
      setPaneo(paneoFinal);
      setDly(dly);
      setSamples(samples);

      //Canal 2
      const restoBack = (distXX * restoXBack) / (largo + restoXBack);
      const restoBack2 = distXX - restoBack;
      const raizCanal2 = Math.sqrt(
        Math.pow(restoBack, 2) + Math.pow(restoXBack, 2)
      );
      const raiz2Canal2 = Math.sqrt(
        Math.pow(restoBack2, 2) + Math.pow(largo, 2)
      );
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
      const restoY = distYY * restoYRight;
      const restoY2 = mitadAncho + restoYRight;
      const result1 = restoY / restoY2;
      const result2 = distYY - result1;
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
      const restoYleft = distYY * restoYLeft;
      const restoYmitad = mitadAncho + restoYLeft;
      const resultado1 = restoYleft / restoYmitad;
      const resultado2 = distYY - resultado1;
      const raiz = Math.sqrt(Math.pow(restoYLeft, 2) + Math.pow(resultado1, 2));
      const raiz22 = Math.sqrt(
        Math.pow(mitadAncho, 2) + Math.pow(resultado2, 2)
      );
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
    }
  };
  // console.log(valorInicialY);
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
