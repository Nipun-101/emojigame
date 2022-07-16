import './index.css'

const NavBar = props => {
  const {clickedEmojiList, topScore, isGameInProgress} = props

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <p className="nav-bar-text text-weight">Emoji Game</p>
      </div>
      {isGameInProgress && (
        <div className="score-container">
          <p className="nav-bar-text margin-right-score">
            Score: {clickedEmojiList.length}
          </p>
          <p className="nav-bar-text">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
