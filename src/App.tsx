import { useState } from "react";
import "./App.css";
import Messages from "./components/Messages";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const [login, setLogin] = useState(false);

  const personObject = {
    first: "David",
    last: "Rigby",
  };

  const jokersArray = [
    {
      first: "Sal",
      last: "Vulcano",
    },
    {
      first: "James",
      last: "Murray",
    },
    {
      first: "Joe",
      last: "Gatto",
    },
    {
      first: "Brian",
      last: "Quinn",
    },
  ];

  const statusArray = ["Hungry", "Satisfied", "Full"];

  return (
    <>
      {!login ? (
        <button onClick={() => setLogin(true)}>Login</button>
      ) : (
        <button onClick={() => setLogin(false)}>Log out</button>
      )}
      <Person personObject={personObject} />
      <br />
      <Messages
        message=" Hello and good morning"
        count={5}
        isLoggedIn={login}
      />
      <PersonList jokersArray={jokersArray} />
      <Status statusArray={statusArray} />
    </>
  );
}

export default App;
