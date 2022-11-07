import React from "react";
import '../styles/App.css'
import MyButton from "./ui/button/MyButton";
import { useNavigate } from "react-router-dom";
const PostItem = ({post, remove}) => {

    const router = useNavigate()


    return(
        <div className='post'>
            <div className='post_content'>
                <strong>{post.id}. {post.title}</strong>
                <div>{post.body}</div>
                <div className='post_btn'>
                    <MyButton onClick={() => router('/posts/' + post.id)}>Open</MyButton>
                </div>
                <div className='post_btn'>
                    <MyButton onClick={() => remove(post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem;