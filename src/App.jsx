import React from "react";
import Counter from "./components/Counter.jsx";

export default function App(props) {
  return (
    <>
      <h1>Hello, {props.name}!</h1>

      <Counter />
    </>
  );
}
