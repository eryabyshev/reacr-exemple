import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../api/PostService";
import Loader from "../components/ui/loader/Loader";

const PostIdPage = () => {

    const pageParam = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const resp = await PostService.getById(id)
        setPost(resp.data)

    })

    const [fetchComment, isCommentLoading, commentError] = useFetching(async (id) => {
        const resp = await PostService.getCommentsByPostId(id)
        setComments(resp.data)
    })

    useEffect(() => {
        fetchPostById(pageParam.id)
        fetchComment((pageParam.id))
    }, [])

    return (
        <div>
            {isLoading
                ? <Loader/>
                : <h1>{post.id} {post.title}</h1>
            }
            <br/>
            {isCommentLoading
                ?<Loader/>
                : <div>
                    {comments.map(com =>
                            <div key={com.id} style={{marginTop: 15}}>
                                <h5>{com.email}</h5>
                                <div>{com.body}</div>

                            </div>
                        )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;