import React, { useState } from "react";

export default function Baitap10() {
  const [count, setCount] = useState(0);

  const [value, setValue] = useState(0);

  const hamDem = (e) => {
    setValue(e.target.value);
  };

  const hamButen = () => {
    setCount(value.split(" ").join("").length);
  };
  return (
    <>
      <input type="text" onChange={hamDem} />
      <button onClick={hamButen}>click</button>
      <p>so ki tu la: {count}</p>
    </>
  );
}
