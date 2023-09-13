import { useState } from "react";
import "./App.css";
import Messages from "./components/Messages";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <button onClick={() => setLogin(true)}>Login</button>
      <Messages
        message=" Hello and good morning"
        count={5}
        isLoggedIn={login}
      />
    </>
  );
}

export default App;
