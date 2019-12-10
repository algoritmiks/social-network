import React from 'react'
import Users from './Users'
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


class UsersAPIComponent extends React.Component {

    componentDidMount(props) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount)
        });
    };


    pageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <Users totalUsers = {this.props.totalUsers}
                setUsers = {this.props.setUsers} 
                pageChanged = {this.pageChanged}
                currentPage = {this.props.currentPage}
                users = {this.props.users}
                setUnfollow = {this.props.setUnfollow}
                setFollow = {this.props.setFollow}
                pageSize = {this.props.pageSize}
            />
        );
    }
}

export default UsersAPIComponent;