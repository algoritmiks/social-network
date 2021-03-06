import React from 'react'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/paginator/Paginator';
import { UserType } from '../../types/types';
import css from './Users.module.css'

type PropsType = {
    totalUsers: number
    pageSize: number
    pageChanged: (pageNum: number) => void
    currentPage: number
    users: Array<UserType>
    setUnfollow: (userId: number) => void
    setFollow: (userId: number) => void
    followingInProgres: Array<number>
}

const Users: React.FC<PropsType> = (props) => {

  return (
    <div>
      <Paginator 
        totalUsers = {props.totalUsers}
        pageSize = { props.pageSize }
        pageChanged = { props.pageChanged }
        currentPage = { props.currentPage }
      />
      {props.users.map(user =>
        <div key={user.id}>
          <div>
            {user.name}
          </div>
          <div>
            <NavLink to={'/profile/' + user.id}>
              <img className={css.ava} src={user.photos.large != null ? user.photos.large : '/img/ava.png'} alt="user"></img>
            </NavLink> 
          </div>
          <div>
            {
              user.followed

              ? <button disabled={ props.followingInProgres.some(el => el === user.id) } onClick={() => {
                  props.setUnfollow(user.id);
                }}> Unfollow </button>

              : <button disabled={ props.followingInProgres.some(el => el === user.id) } onClick={() => {
                  props.setFollow(user.id);
                }}> Follow </button>
              }
          </div>
          <br></br>
        </div>)
      }
    </div>
  );

}

export default Users;