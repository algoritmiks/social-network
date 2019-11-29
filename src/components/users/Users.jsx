import React from 'react';
import css from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, avaSrc: '/img/girl1.jpg', follow: true, fullName: "Sveta", status: "free for chat", location: {country:"Russia", city: "Moscow"} },
            { id: 2, avaSrc: '/img/ava.png', follow: false, fullName: "Misha", status: "free for chat", location: {country:"Russia", city: "Yaroslavl"} },
            { id: 3, avaSrc: '/img/ava2.jpg', follow: false, fullName: "Dima", status: "free for chat", location: {country:"Russia", city: "Piter"} },
            { id: 4, avaSrc: '/img/ava4.png', follow: true, fullName: "Katya", status: "learning", location: {country:"Russia", city: "Piter"} },
        ]);
    }
    

    let usersArr = props.users.map(user =>
        <div >
            <div>
                {user.fullName}
            </div>
            <div>
                <img className={css.ava} src={user.avaSrc}></img>
            </div>
            <div>
                {user.location.country}
            </div>
            <div>
                {user.location.city}
            </div>
            <div>
                {user.status}
            </div>
            <div>
                { user.follow 
                    ? <button onClick={ () => props.setUnfollow(user.id) }> Unfollow </button> 
                    : <button onClick={ () => props.setFollow(user.id) }> Follow </button> }
            </div>
        </div>
        );
    return (
        <div>
            { usersArr }
        </div>
    );
}


export default Users;