import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from '../../components/post/Post'
import Pagination from '../../components/Pagination/Pagination.jsx'

/*eslint-disable */

const App = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [size, setSize] = useState(3)
  
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPagePage] = useState(null)
  
  const handleChangePage = (val) => {
    if (val === '...') {
      return
    }
    if (val === 0 || val > totalPage) {
      return
    }
    setPage(val);
  }

  const getList = async () => {
    setLoading(true)
    let res = await axios.get('/api/articles', { params: { size, page } })
    if (res.data.status === 200) {
      setLoading(false)
      setList(res.data.list)
      setTotalPagePage(res.data.totalPage)
    }
  }
  useEffect(() => {
    getList();
  }, [page])
  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>文章列表</h2>
      <Post list={list} loading={loading}></Post>
      <Pagination totalPage={totalPage} loading={loading} page={page} handleChangePage={handleChangePage}></Pagination>
    </div>
  );
}

export default App;
