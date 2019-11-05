import React from "react";
import Numbers from "./Numbers";

const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}

      <button className="buttons" onClick = { ()=> props.setNumberState(props.numbers) }>{props.numbers}</button>
    </>
  );
};

export default NumberButton;
