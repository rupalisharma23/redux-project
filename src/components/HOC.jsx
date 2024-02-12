import React, { useState } from "react";

const higherOrderFuction = (OldComponent, val, text) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + val);
    };

    return (
      <div>
       <div>{text} {count}</div> 
        <OldComponent increment={increment} count={count} {...props} />
      </div>
    );
  };
};

export default higherOrderFuction;
