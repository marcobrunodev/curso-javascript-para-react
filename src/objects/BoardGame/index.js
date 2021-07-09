import "./style.css";
import CardGame from "../../components/CardGame";

function BoardGame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlContent = $htmlCardGame.repeat(amountCards);

  return /*html*/ `
    <section class="board-game">
      ${$htmlContent}
    </section>
  `;
}

export default BoardGame;
