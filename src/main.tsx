import { render } from "preact"
import { App } from "./app.tsx"

import "./styles/reset.css"
import "./styles/global.css"

render(<App />, document.querySelector("#app")!)
