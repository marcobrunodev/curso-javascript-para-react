import PlayerName from "../../components/PlayerName";

function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
      ${PlayerName("Player1")}
      ${PlayerName("Player2")}
    </header>
  `;
}

export default ScoreBoard;
