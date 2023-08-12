import { useState } from "preact/hooks";
import "./growsTextarea.scss";

function GrowsTextarea({ text = "", props = {}, width = "10em", parent = {} }) {
  const [value, setValue] = useState(text);

  return (
    <div className={"textarea-wrap"} {...parent} style={{ width }}>
      <textarea {...props} onInput={(e) => setValue(e.currentTarget.value)}>
        {text}
      </textarea>
      <pre>{value + "\n"}</pre>
    </div>
  );
}

export { GrowsTextarea };
