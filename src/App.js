import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ans, setAns] = useState("");

  const calculateAnswer = () => {
    const [localPart, domain] = email.split("@");
    const [hostname, ...countryCodes] = domain.split(".");
    const str = `${localPart.length}${hostname.length}${countryCodes.reduce(
      (a, cc) => a + cc.length,
      ""
    )}`;

    if (ans != str) {
      alert("Wrong Answer");
    }

    console.log(str);
  };

  return (
    <div>
      Name :{" "}
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      email :{" "}
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      Answer :{" "}
      <input
        type="text"
        onChange={(e) => {
          setAns(e.target.value);
        }}
      />
      <input
        type="button"
        onClick={() => {
          calculateAnswer();
        }}
        value="submit"
      />
    </div>
  );
}

export default App;
