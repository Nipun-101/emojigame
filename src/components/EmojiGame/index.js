import {Component} from 'react'
import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLose from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    clickedEmojiList: [],
    topScore: 0,
    isGameInProgress: true,
  }

  renderScoreCard = () => {
    const maxListLength = this.getShuffledEmojisList().length
    const {clickedEmojiList} = this.state
    const isWon = maxListLength === clickedEmojiList.length
    const score = clickedEmojiList.length

    return <WinOrLose isWon={isWon} score={score} reset={this.resetAll} />
  }

  resetAll = () => {
    this.setState({
      clickedEmojiList: [],
      isGameInProgress: true,
    })
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojiClick = id => {
    const maxListLength = this.getShuffledEmojisList().length
    const {clickedEmojiList, topScore} = this.state
    const isIdInclude = clickedEmojiList.includes(id)
    let newTopScore = topScore
    let newList = []

    if (isIdInclude) {
      if (clickedEmojiList.length > topScore) {
        newTopScore = clickedEmojiList.length
      }
      this.setState({
        topScore: newTopScore,
        isGameInProgress: false,
      })
    } else {
      newList = [...clickedEmojiList, id]
      if (newList.length === maxListLength) {
        this.setState({
          clickedEmojiList: newList,
          topScore: newList.length,
          isGameInProgress: false,
        })
      } else {
        this.setState({
          clickedEmojiList: newList,
        })
      }
    }
  }

  renderEmojiDisplay = () => {
    const randomisedEmojiList = this.getShuffledEmojisList()

    return (
      <ul className="emoji-list-container">
        {randomisedEmojiList.map(eachObj => (
          <EmojiCard
            emojiDetailsObj={eachObj}
            clickemoji={this.emojiClick}
            key={eachObj.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojiList, topScore, isGameInProgress} = this.state

    return (
      <div className="bg-container">
        <NavBar
          clickedEmojiList={clickedEmojiList}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="game-sts-body">
          {isGameInProgress && this.renderEmojiDisplay()}
          {!isGameInProgress && this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
