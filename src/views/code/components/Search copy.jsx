import React, { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
    if(search !== ''){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  const handleClearSearch = () => {
    setShow(false)
    setSearch('')
  }

  return (
    <div className="search">
      <div className="search-item">
        {show}
        <input value={search} onChange={handleChangeSearch} type="search" placeholder="请输入搜索关键词" className="search-control" />
        {
          show ? (<div className="clear" onClick={handleClearSearch}><span>&gt;</span></div>): null
        }
      </div>
    </div>
  )
}

export default Search
