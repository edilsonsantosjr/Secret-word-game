import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return(
    <div className="start-container">
      <div className="start">
        <h1 className="startscreen-title">
          <span className="title_secret">Secret</span>
          <span className="title_word">Wo<span className="title_word-r">r</span><span className="title_word-d">d</span></span>
        </h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame} >Começar o jogo</button>
      </div>
    </div>
  );
};

export default StartScreen;