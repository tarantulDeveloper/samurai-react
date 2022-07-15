import classes from "./Users.module.css";
import avatar from "../../assets/avatar.png";
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div >
            <div className={classes.pagesDiv}>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p
                        ? `${classes.selected} ${classes.pages}`
                        : classes.pages}
                                 onClick={() => {
                                     props.onPageChange(p)
                                 }}>{p}</span>
                })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={classes.avatar}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : avatar} alt="profile picture"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.isFollowingInProgress
                                    .some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button disabled={props.isFollowingInProgress
                                    .some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>u.location.country</div>
                            <div>u.location.city</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;