import React, { useState } from "react";

const App = () => {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [naam, setnaam] = useState("click me");
  const bgChange = () => {
    let newBg = "#34495e";
    setBg(newBg);
    setnaam("oouch");
  };
  const bgBack = () => {
    setBg(purple);
    setnaam("aaaiyooo😒😒😒");
  };
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onMouseEnter={bgChange} onMouseLeave={bgBack}>
          {" "}
          {naam}
        </button>
      </div>
    </>
  );
};
export default App;
