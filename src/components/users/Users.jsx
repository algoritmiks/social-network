import React from 'react'
import css from './Users.module.css'
import * as axios from 'axios'

   // "name": "anatoliy",
    //             "id": 5358,
    //             "uniqueUrlName": null,
    //             "photos": {
    //                 "small": null,
    //                 "large": null
    //             },
    //             "status": null,
    //             "followed": false


class Users extends React.Component {

    componentDidMount(props) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount)
        });
    };


    pageChanged(pageNum) {
        this.props.setCurrentPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize);
        let pages = [];
        for (let i=1; i <= pagesCount; i++ ){
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(pageNum => 
                        <span className={pageNum === this.props.currentPage && css.active}
                            onClick = {(event)=>this.pageChanged(pageNum)}> 
                                {pageNum} 
                        </span>)}
                </div>
                {this.props.users.map(user =>
                    <div >
                        <div>
                            {user.name}
                        </div>
                        <div>
                            <img className={css.ava} src={user.photos.large !=null ? user.photos.large : '/img/ava.png'}></img>
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
                                ? <button onClick={() => this.props.setUnfollow(user.id)}> Unfollow </button>
                                : <button onClick={() => this.props.setFollow(user.id)}> Follow </button>}
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

export default Users;