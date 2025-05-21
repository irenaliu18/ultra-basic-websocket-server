import { useEffect, useState } from "react";
import { socket } from "../socket";

export default function TextArea() {
  const [input, setInput] = useState("");
  const onDocChange = (value) => {
    setInput(value);
  };

  useEffect(() => {
    // update the text area with new text
    // in the doc

    return () => {
      // cleanup goes here
    };
  }, []);

  return (
    <textarea
      rows={100}
      cols={100}
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
        // let the server know there's been an input change
      }}
    />
  );
}
