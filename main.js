import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";
import ScoreBoard from "./src/objects/ScoreBoard";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `
    ${ScoreBoard()}
    ${BoardGame(6)}
  `
);
