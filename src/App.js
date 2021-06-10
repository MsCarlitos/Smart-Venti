import React, { useState, useEffect } from "react";
import fire from "./Components/firebase";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import "./App.css";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAcount, setHasAcount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPass("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/Correo electrónico inválido":
          case "auth/Usuario no encontrado":
          case "auth/Correo electrónico no encontrado":
            setEmailError(err.message);
            break;
          case "auth/Contraseña Incorrecta":
            setPasswordError(err.message);
            break;
            default:
        }
      });
  };
  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/Ya es una cuenta Smart-Venti. Prueba con otra dirección de correo electrónico.":
          case "auth/Correo electrónico invalido":
            setEmailError(err.message);
            break;
          case "auth/La contraseña es debil":
            setPasswordError(err.message);
            break;
            default:
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  });

  return (
    <div>
      {user ? (
        <Home handleLogout={handleLogout} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPass={setPass}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAcount={hasAcount}
          setHasAcount={setHasAcount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
};

export default App;

/**<div className="container-fluid d-flex justify-content-center ">
        <div className="card" style={{ width: "30rem", marginTop: "2vmax" }}>
          <div className="row no-gutters">
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#0B4F36" }}>
                Crear Cuenta
              </h5>
              <div className="input-group mb-3">
                <div className="input-group-prepend"></div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electronico"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend"></div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                />
              </div>
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input id="ver" className="ver" type="checkbox" />
                </div>
                <p className="card-text">
                  <small className="text-muted">Mostrar la contraseña</small>
                </p>
              </div>
              <p />
              <button onPress={() => loginUser(email.trim(), pass)}>
                Crear Cuenta{" "}
              </button>
            </div>
          </div>
        </div>
      </div> */
