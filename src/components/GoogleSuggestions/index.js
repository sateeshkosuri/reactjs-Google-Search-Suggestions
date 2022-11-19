import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onUserSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeSearchInput = id => {
    const {suggestionsList} = this.props
    suggestionsList.filter(eachItem => eachItem.id === id)
    this.setState({searchInput: suggestionsList.eachItem.suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResult = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="google-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <div className="card-container">
          <div className="card-details">
            <button type="button" className="button-type">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-image"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-input"
                value={searchInput}
                onChange={this.onUserSearchInput}
              />
            </button>
          </div>
          <ul className="list-items">
            {searchResult.map(each => (
              <SuggestionItem
                googleList={each}
                key={each.id}
                onChange={this.onChangeSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
