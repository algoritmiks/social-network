import React from 'react'
import css from './Users.module.css'
import {NavLink} from 'react-router-dom';

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

    const changeCurrentPage = (e) => {
      if (e.target.tagName === "SPAN") {
        props.pageChanged(Number(e.target.textContent))
      }
    }

    return (
        <div>
            <div onClick= { changeCurrentPage }>
              { pages.map( page => <span className={props.currentPage === page && css.active}> {page} </span> ) }
            </div>
            
            {props.users.map(user =>
                <div>
                    <div>
                        {user.name}
                    </div>
                    <div>
                    <NavLink to={'/profile/'+user.id}>
                        <img className={css.ava} src={user.photos.large != null ? user.photos.large : '/img/ava.png'} alt="user"></img>
                    </NavLink>
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