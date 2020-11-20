import React from 'react';
import css from './Paginator.module.css'

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const changeCurrentPage = (e) => {
    if (e.target.tagName === "SPAN") {
      props.pageChanged(Number(e.target.textContent))
    }
  }

  return (
      <div onClick={changeCurrentPage}>
        {pages.map(page => <span className={props.currentPage === page && css.active}> {page} </span>)}
      </div>
  )
}

export default Paginator;