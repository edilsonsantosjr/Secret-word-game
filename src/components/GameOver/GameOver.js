import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div className="container_game-over">
      <div className="game-over">
        <h1>Fim do jogo!</h1>
        <h2>A sua pontuação foi: <span>{score}</span></h2>
        <button onClick={retry}>Resetar jogo</button>
      </div>
    </div>
  )
}

export default GameOver