import './index.css'

const EmojiCard = props => {
  const {emojiDetailsObj, clickemoji} = props
  const {id, emojiName, emojiUrl} = emojiDetailsObj

  const emojiClick = () => {
    clickemoji(id)
  }

  return (
    <li className="emojicard">
      <button type="button" className="emoji-button" onClick={emojiClick}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
