import React from 'react';

const Desliz = (props) =>{
  const {
    handleSwitch,
    desliz,
    setSwitch
  } = props;
  return(
    <div className="Home">
        <div className="switchContainer">
          <label className="texto">Encendido</label>
          <div className="on"></div>
          <label className="texto">Apagado</label>
          <div className="off"></div>
        </div>
        <div className="switchContainer">
          <label className="letra">Abanico</label>
          <label className="switch">
            <input
              type="checkbox"
              value={desliz ? false : true}
              onChange={(e) => setSwitch(e.target.value)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
  )
}
export default Desliz;