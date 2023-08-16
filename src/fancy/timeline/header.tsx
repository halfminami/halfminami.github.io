import "./header.scss";

function Header() {
  return (
    <header>
      <Logo></Logo>
      <ul>
        <li>
          <h1>Lorem.</h1>
          <ul>
            <li>
              <p>
                <a href="#" className={"nav"}>
                  Lorem.
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className={"nav"}>
                  Doloremque.
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className={"nav"}>
                  Sint?
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className={"nav"}>
                  Reiciendis?
                </a>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h1>Maiores?</h1>
          <ul>
            <li>
              <p>
                <a href="#" className={"nav"}>
                  Lorem.
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className={"nav"}>
                  Beatae.
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className={"nav"}>
                  A.
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className={"nav"}>
                  Eos.
                </a>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h1>Ab.</h1>
          <ul>
            <li>
              <p>
                <a href="#" className={"nav"}>
                  Lorem.
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className={"nav"}>
                  Voluptatum.
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className={"nav"}>
                  Hic.
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className={"nav"}>
                  Perferendis.
                </a>
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
}

function Logo() {
  return <div className="logo">Logorem Ipsum</div>;
}

export { Header, Logo };
