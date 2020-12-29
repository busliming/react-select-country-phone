import React from 'react'
import PropTypes from 'prop-types'

const Search = ({search, setSearch}) => {

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  }


  return (
    <div className="search">
      <div className="search-item">
        <input value={search} onChange={handleChangeSearch} type="search" placeholder="请输入搜索关键词" className="search-control" />
      </div>
    </div>
  )
}

Search.propType = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
}

export default Search
