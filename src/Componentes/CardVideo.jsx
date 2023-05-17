import React from "react"
import InfosUsuario from "../Componentes/InfosUsuarios";


const CardVideo = ({card, usuario}) => {

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    return(
        <div className="box-pagina-principal" onClick={reproduzVideo}>
           
           <img src={card.imagem} alt="" />
           <h4>{card.titulo}</h4>
           <InfosUsuario usuario = {usuario}/>
        </div>
    )
}

export default CardVideo
