import React, { useRef, useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");

  const userRef = useRef(null);

  const userNameHandler = (event) => {
    setUserName(event.target.value);

    if (event.target.value.includes("o") || event.target.value.includes("O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
      userRef.current.focus();
      userRef.current.style.borderColor = "red";
      userRef.current.style.outline = "none";
    } else {
      userRef.current.style.borderColor = "black";
      userRef.current.style.outline = "none";
    }
  };

  const singInHandler = () => {
    if (
      userName.length <= 0 ||
      userName.includes("o") ||
      userName.includes("O")
    ) {
      alert("Usuario inválido para registrarse");
    } else {
      alert(`¡Usuario registrado correctamente! ${userName}`);
    }
  };
  return (
    <div>
      <label>Ingrese su username: </label>
      <input ref={userRef} type="text" onChange={userNameHandler}></input>
      <button onClick={singInHandler}>Registrarse</button>
      <div>
        <p>{userName}</p>
      </div>
    </div>
  );
};

export default Login;
