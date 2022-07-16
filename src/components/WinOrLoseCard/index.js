import './index.css'

const WinOrLose = props => {
  const {isWon, score, reset} = props
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreStatus = isWon ? 'Best Score' : 'Score'
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const playAgain = () => {
    reset()
  }

  return (
    <div className="score-card">
      <img src={imageUrl} alt="img" className="img-status-game" />
      <h1 className="head-sts">{gameStatus}</h1>
      <p className="para-sts">{scoreStatus}</p>
      <p className="score">{score}/12</p>
      <button type="button" className="play-again" onClick={playAgain}>
        Play Again
      </button>
    </div>
  )
}

export default WinOrLose
