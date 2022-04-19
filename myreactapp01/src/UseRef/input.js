import react,{ useState, useEffect, useRef } from "react";

function input() {
  const [inputvalue, setInputvalue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <input type="text" value={inputvalue} onChange={(e) => setInputvalue(e.target.value)}/>
      <h1>Render Count: {count.current}</h1>
    </div>
  );
}

export default input;