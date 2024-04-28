import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import Formulario from "../Formulario/Formulario.jsx";

export default function Registro({ onAlert }) {
  return (
    <>
      <h1>Crea una cuenta</h1>
      <SocialButton button={"fa-facebook"} />
      <SocialButton button={"fa-github"} />
      <SocialButton button={"fa-linkedin"} />
      <p>O regístrarte con tu mail.</p>
      <Formulario addAlert={onAlert} />
    </>
  );
}
