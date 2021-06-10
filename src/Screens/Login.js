import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPass,
    handleLogin,
    handleSignUp,
    hasAcount,
    setHasAcount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Correo electrónico</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Contraseña</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAcount ? (
            <>
              <button onClick={handleLogin}>Inicia Sesión</button>
              <p>
                ¿No tienes una cuenta?
                <span onClick={() => setHasAcount(!hasAcount)}>Registrate</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Registrate</button>
              <p>
                ¿Ya tienes una cuenta?
                <span onClick={() => setHasAcount(!hasAcount)}>Inicia Sesión</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;