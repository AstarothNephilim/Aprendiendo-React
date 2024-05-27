import React from 'react';

const Fact = ({catFact}) =>{

    const getImgUrl = (catFact) => {
        return `https://cataas.com/cat/says/${catFact.split(' ')[0]}`
      }

    return (
      <div className = "fact">
        <p>{catFact}</p>
        <img src={getImgUrl(catFact)} alt={`Imagen generada a partir de esta frase: ${catFact}`} />
      </div>
    )
  }

export default Fact;