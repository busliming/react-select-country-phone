import React, { useState, useEffect } from 'react'
import './Code.css'
import Search from './components/Search'
import Content from './components/Content'
import Letter from './components/Letter'

/*eslint-disable */

const Code = () => {
  const [list, setList] = useState({})
  const [copyList, setCopyList] = useState({})
  const [letter, setLetter] = useState('')
  const [search, setSearch] = useState('');

  const initCodeList = async () => {
    let res = await fetch('/mock/code.json').then(res => res.json())
    if (res.ret) {
      // setList(res.data);
      let list = res.data;
      setList(list)
      setCopyList({...res.data})
    }
  }

  useEffect(() => {
    initCodeList()
  }, [])

  useEffect(() => {
    // console.log('123')
    if (search !== '') {
      let listObj = { ...list };
      const newListObj = {}
      for (const key in listObj) {
        if (listObj.hasOwnProperty(key)) {
          const element = listObj[key];
          const filterArr = element.filter(item => item.pinyin.includes(search));
          if (filterArr.length > 0) {
            newListObj[key] = filterArr;
          }
        }
      }
      setList(newListObj);
    }else{
      setList(copyList)
    }
  }, [search])

  return (
    <div className="code">
      <Search search={search} setSearch={setSearch}></Search>
      <div className="wrap">
        {
          Object.keys(list).length > 0 ?
          (
            <div className="cont">
              <Content list={list} code={letter}></Content>
              <Letter list={list} setLetter={setLetter}></Letter>
            </div>
          ): (<div className="empty">暂无数据...</div>) 
        }
      </div>
    </div>
  )
}

export default Code
