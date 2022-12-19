import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        // props.addPost();
        props.dispatch({type: 'ADD-POST'});
    }
    let onPostChange = () => {
        let updateText = newPostElement.current.value;
        // props.updateNewPostText(updateText);
        let action = {type:'UPDATE-NEW-POST-TEXT', newText: updateText};
        props.dispatch(action);
    }

    return (<div className={s.postsBlock}>
                <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button type={"button"} onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
             {/*   <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>*/}
            </div>
        </div>
    )
}

export default MyPosts;