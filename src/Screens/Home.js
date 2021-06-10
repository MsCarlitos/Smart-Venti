import React, { useState } from "react";
import fire from "../Components/firebase";
import Dezliz from "./Desliz";

const Home = ({ handleLogout }) => {
  const [desliz, setSwitch] = useState(false);

  fire.database().ref().update({
    abanico:{
      desliz:desliz
    }
  })

  return (
    <section className="hero">  
      <nav>
        <h2>Bienvenido a Smart-Venti</h2>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </nav>
      <Dezliz
        setSwitch={setSwitch}
        desliz={desliz}
      />
    </section>
  );
};
export default Home;
