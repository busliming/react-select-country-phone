const express = require('express');
const Mock = require('mockjs');

const app = express();

// // 通过Express的中间件来处理所有请求
// app.use('*', function (req, res, next) {
//   // 设置请求头为允许跨域
//   res.header('Access-Control-Allow-Origin', '*');

//   // 设置服务器支持的所有头信息字段
//   res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,Accept,X-Requested-With');
//   // 设置服务器支持的所有跨域请求的方法
//   res.header('Access-Control-Allow-Methods', 'POST,GET');
//   // next()方法表示进入下一个路由
//   next();
// });


app.get('/articles', (req, res) => {
  const mockLength = 50;
  const list = []
  for (let index = 0; index < mockLength; index++) {
    list.push({
      id: index + 1,
      title: Mock.Random.cparagraph(1),
      content: Mock.Random.cparagraph(3, 5),
      author: Mock.Random.cname(),
      date: Mock.Random.datetime(),
      like: Mock.Random.natural(1, 1000)
    })
  }

  const { page = 1, size = 10 } = req.query;
  const start = Number((page-1)*size);
  const end = size > mockLength? mockLength: start*1+size*1;
  const totalPage = Math.ceil(mockLength/(size*1))
  console.log(start,end)
  const newList = list.slice(start,end);

  res.json(Mock.mock({
    "status": 200,
    currentPage: newList.length,
    totalPage,
    total: mockLength,
    list: newList   
  }))
})


// {
//   "id|+1": 1,
//   "title": '',
//   'content': '',
//   'date': Mock.Random.datetime,
//   'author': Mock.Random.name,
//   'like|50-100': 50
// }

const port = process.env.PORT || 5060;

app.listen(port, () => {
  console.log(`Server is running on port ${5060} `)
})