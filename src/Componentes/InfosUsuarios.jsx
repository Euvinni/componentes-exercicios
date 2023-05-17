import React from "react";

function InfosUsuario({usuario}) {
  return (
    <div>
      <h2>Nome: {usuario.nome}</h2>
    </div>
  );
}

export default InfosUsuario;