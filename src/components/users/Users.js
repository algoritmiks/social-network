import React from 'react'
import css from './Users.module.css'

// "name": "anatoliy",
//             "id": 5358,
//             "uniqueUrlName": null,
//             "photos": {
//                 "small": null,
//                 "large": null
//             },
//             "status": null,
//             "followed": false


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(pageNum =>
                    <span className={pageNum === props.currentPage && css.active}
                        onClick={(event) => props.pageChanged(pageNum)}>
                        {pageNum}
                    </span>)}
            </div>
            {props.users.map(user =>
                <div >
                    <div>
                        {user.name}
                    </div>
                    <div>
                        <img className={css.ava} src={user.photos.large != null ? user.photos.large : '/img/ava.png'}></img>
                    </div>
                    <div>
                        {"user.location.country"}
                    </div>
                    <div>
                        {"user.location.city"}
                    </div>
                    <div>
                        {"user.status"}
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => props.setUnfollow(user.id)}> Unfollow </button>
                            : <button onClick={() => props.setFollow(user.id)}> Follow </button>}
                    </div>
                </div>)
            }
        </div>
    );

}

export default Users;