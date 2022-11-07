import React, {useRef, useState} from 'react';
import MyInput from "./ui/input/MyInput";
import MyButton from "./ui/button/MyButton";
import PostList from "./PostList";

const PostForm = ({create, nextIndex}) => {

    const [title, setTitle] = useState('')

    const bodyInputRef = useRef()

    function addNewPost(e) {
        e.preventDefault()

        let header = title
        let body = bodyInputRef.current.value

        let newPost = {
            id: nextIndex(),
            title: header,
            body: body
        }

        create(newPost)
        bodyInputRef.current.value = ''
        setTitle("")
    }


    return (
        <div>
            <form>
                <MyInput
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                    type='text'
                    placeholder="Name"
                />
                <MyInput
                    ref={bodyInputRef}
                    type='text'
                    placeholder="Description"
                />
                <MyButton onClick = {addNewPost}>Add Post</MyButton>
            </form>
        </div>
    );
};

export default PostForm;