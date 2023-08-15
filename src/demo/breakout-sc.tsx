import { render } from "preact";
import { Main } from "./breakout/main";

render(<Main></Main>, document.getElementById("app")!);

import { mnt as mntHeader } from "../assets/header";
import { mnt as mntFooter } from "../assets/footer";
import "/src/style.scss";

mntHeader();
mntFooter();
