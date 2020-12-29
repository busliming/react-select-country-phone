import './Pagination.css'
const Pagination = ({ totalPage,loading, page, handleChangePage }) => {

  let listArr = []
  let allArr = []
  for (let index = 0; index < totalPage; index++) {
    allArr.push(index + 1);
  }
  // 总共的页码数在限定数内 10
  if (totalPage <= 10) {
    listArr = allArr;
  } else {
    // 总共页码数大于10 && 当前页面< 5 
    if (page < 5) {
      listArr = [...allArr.slice(0, 5), '...', totalPage]
    } else if (page <= (totalPage - 4)) {
      // 当前页码小于等予总页码的totalPage - 4
      listArr = [1, '...', ...allArr.slice(page - 2, page + 1), '...', totalPage]
    } else {
      // 当前页面在5 和 totalPage - 4 中间
      listArr = [1, '...', ...allArr.slice(totalPage - 5, totalPage)]
    }
    // listArr = allArr;
  }
  if(loading){
    return null
  }
  return (
    <div className="pagination">
      <div className="list-page" onClick={() => handleChangePage(page - 1)}>&lt;</div>
      {
        listArr.map((item, i) => (
          <div key={'listArr' + i} className={item === '...' ? 'list-page-space' : page === item ? 'list-page active' : 'list-page'} onClick={() => handleChangePage(item)}>{item}</div>
        ))
      }
      <div className="list-page" onClick={() => handleChangePage(page + 1)}>&gt;</div>
    </div>
  )
}

export default Pagination
