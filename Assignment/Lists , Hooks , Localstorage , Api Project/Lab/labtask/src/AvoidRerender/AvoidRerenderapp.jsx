/* Task 4: 
o Create react app to avoid re-renders in react application by useRef  ? */
import React, { useRef } from "react";

function AvoidRerenderapp() {
  const reference = useRef(0); 

  const clickable = () => {
    reference.current += 1;
    alert("Clicked " + reference.current + " times");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef to Avoid Re-renders</h2>
      <button onClick={clickable}>Click Me</button>
    </div>
  );
}

export default AvoidRerenderapp;
