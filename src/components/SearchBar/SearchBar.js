import React from 'react'
import { connect } from 'react-redux'
import { setInputValue } from '../../modules/searchReducer'

const SearchBar = ({ setInputValue }) => {
  const handleChange = event => {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <div className="relative mr-6 my-2">
        <input
          onChange={handleChange}
          type="search"
          className="bg-purple-white shadow rounded border-0 p-3"
          placeholder="Search by name..."
        />
        <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter" />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    search: state.search.value,
  }
}

const mapDispatchToProps = {
  setInputValue,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar)
