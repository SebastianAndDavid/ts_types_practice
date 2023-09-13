import { useState } from "react";
import "./App.css";
import Messages from "./components/Messages";
import Person from "./components/Person";

function App() {
  const [login, setLogin] = useState(false);

  const personObject = {
    first: "David",
    last: "Rigby",
  };

  return (
    <>
      {!login ? (
        <button onClick={() => setLogin(true)}>Login</button>
      ) : (
        <button onClick={() => setLogin(false)}>Log out</button>
      )}
      <Messages
        message=" Hello and good morning"
        count={5}
        isLoggedIn={login}
      />
      <Person personObject={personObject} />
    </>
  );
}

export default App;
