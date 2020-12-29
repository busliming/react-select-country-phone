import React from 'react'
import PropTypes from 'prop-types'

const Letter = ({ list,setLetter }) => {
  const listArr = Object.keys(list);

  const handleClickLetter = (letter) => {
    setLetter(letter)
  }
  return (
    <div className="letter">
      {
        listArr.map(letter => {
          return (
            <div className="cell" key={letter + 'Letter'} onClick={() => handleClickLetter(letter)}>{letter}</div>
          )
        })
      }
    </div>
  )
}

Letter.prototype = {
  list: PropTypes.object.isRequired,
  setLetter: PropTypes.func.isRequired,
}

export default Letter
