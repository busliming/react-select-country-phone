import React from 'react'
import './post.css'

const Post = ({ list,loading }) => {
  if(loading){
    return (<h2 style={{textAlign:'center'}}>数据加载中...</h2>)
  }
  return (
    <div className="post">
      {list.map(user => (
        <div key={user.id} className="card">
          <h5>{user.title}</h5>
          <div className="content">{user.content}</div>
          <div className="info">
            <div className="date">时间：{user.date}</div>
            <div className="author">作者：{user.author}</div>
            <div className="like">点赞：{user.like}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Post



