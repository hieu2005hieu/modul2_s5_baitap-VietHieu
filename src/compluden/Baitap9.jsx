import React, { useState } from "react";

export default function Baitap9() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count:{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
    </>
  );
}
