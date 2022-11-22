import './index.css'

const SuggestionItem = props => {
  const {googleList} = props
  const {suggestion, updatedList} = googleList

  const onClicked = id => {
    updatedList(id)
  }

  return (
    <li>
      <div className="suggestion-item-container">
        <p className="paragraph">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
          onClick={onClicked}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
