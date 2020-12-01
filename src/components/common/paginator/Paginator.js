import React, {useState} from 'react';
import css from './Paginator.module.css'

const Paginator = ({ totalUsers, pageSize, pageChanged, currentPage, sectionSize = 10 }) => {
    const pagesCount = Math.ceil(totalUsers / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const sectionCount = Math.ceil(pagesCount / sectionSize);
    const [sectionNumber, setSectionNumber] = useState(1);
    const leftSideSectionPageNumber = sectionNumber * sectionSize - sectionSize + 1;
    const rightSideSectionPageNumber = sectionNumber * sectionSize;

    const changeCurrentPage = (e) => {
        if (e.target.tagName === "SPAN") {
            pageChanged(Number(e.target.textContent))
        }
    }

    return (
        <div>
            {sectionNumber > 1 && <button onClick = {() => {setSectionNumber(sectionNumber - 1)}}>prev</button>}
            <div onClick={changeCurrentPage}>
                {
                    pages.filter( page => page >= leftSideSectionPageNumber && page <= rightSideSectionPageNumber)
                    .map((page, index) => <span className={currentPage === page && css.active} key={index}> {page} </span>)
                }
            </div>
            {sectionNumber < sectionCount && <button onClick = {() => {setSectionNumber(sectionNumber + 1)}}>next</button>}
        </div>
    )
}

export default Paginator;