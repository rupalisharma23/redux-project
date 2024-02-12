import React from "react";
import higherOrderFuction from "./HOC";

function B(props) {
  return (
    <button
      className="bg-pink-500 text-black-500 w-[500px] p-4"
      onClick={props.increment}
    >
      {props.buttonText}
    </button>
  );
}

export default higherOrderFuction(B, 20, "b");
