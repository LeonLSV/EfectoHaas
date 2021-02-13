import React from "react";
import { Calculo } from "../components/Calculo";
import { UserProvider } from "../components/Cuentas";

export const PageIntro = () => {
  return (
    <>
      <UserProvider>
        <Calculo />
      </UserProvider>
    </>
  );
};
