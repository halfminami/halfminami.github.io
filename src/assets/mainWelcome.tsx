import "./mainWelcome.scss";

function MainWelcome() {
  return (
    <div className={"main-welcome-wrap"}>
      <div
        className={"main-welcome"}
        style={{ fontSize: "4rem", fontWeight: 600 }}
      >
        {"main welcome message".split("").map((item) => (
          <span className={"main-welcome-letter"}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export { MainWelcome };
