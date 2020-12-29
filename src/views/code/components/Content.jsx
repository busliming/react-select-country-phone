import React,{ useRef, useEffect } from 'react'
import PropTypes from 'prop-types' 
const Content = ({list,code}) => {
  const itemsRef = useRef([]);
  useEffect( () => {
    if(itemsRef.current[code]){
      const target = itemsRef.current[code].offsetTop - 54;
      window.scrollTo({
        top: target
      })
    }
  },[code])
  return (
    <div className="list-content">
      {
        Object.keys(list).map((letter) => {
          return (
            <div className="list" key={letter} id={letter} ref={el => itemsRef.current[letter] = el}>
              <div className="title">{letter}</div>
              {
                list[letter].map(item => {
                  return (
                    <div className="list-item" key={item.info}>
                      <div className="left">{item.name}({item.pinyin})</div>
                      <div className="right">+ {item.tel}</div>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

Content.propTypes = {
  list: PropTypes.object.isRequired,
  code: PropTypes.string
}

export default Content




