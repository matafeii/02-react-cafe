import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
import "./style.css";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
