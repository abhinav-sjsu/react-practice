import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Abhinav");
  };

  const resetName = () => {
    setName("Guest");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName} style={{ marginRight: "10px" }}>
        Set Name
      </button>
      <button onClick={resetName}>Reset Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  );
};

export default MyComponent;
