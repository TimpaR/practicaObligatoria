import "./App.css";
import Login from "./componentes/login/Login";
import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const showLoginHandler = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="App">
      {showLogin === false && (
        <button type="button" onClick={showLoginHandler}>
          Iniciar sesion
        </button>
      )}
      {showLogin !== false && <Login />}
      {showLogin === true && (
        <button type="button" onClick={showLoginHandler}>
          Cerrar sesion
        </button>
      )}
    </div>
  );
}

export default App;
