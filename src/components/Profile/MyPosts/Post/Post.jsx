import React from "react";
import classes from './Post.module.css'
const Post = (props) => {
    return (

        <div className={classes.item}>
            <img src={'https://memepedia.ru/wp-content/uploads/2017/10/%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B5%D0%BB%D0%B8%D0%BD-%D0%BC%D0%B5%D0%BC-9.jpg'} alt={'black lord'}/>
            {props.message}
            <div>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>

    )
}
export default Post;