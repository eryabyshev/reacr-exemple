import React, {useEffect, useMemo, useState} from 'react';
import {getPageCount, getPagesArray} from "../utils/pages";
import {usePost} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../api/PostService";
import MyButton from "../components/ui/button/MyButton";
import MyModal from "../components/ui/modal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/ui/loader/Loader";
import PostList from "../components/PostList";
import MyPagination from "../components/ui/pagination/MyPagination";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    let pageArray = useMemo(() => {
        return getPagesArray(totalPage)
    }, [totalPage])

    const sortedAndSearchPost = usePost(posts, filter.sort, filter.query)

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll(limit, page)
        setPosts(posts.data)
        const totalCount = posts.headers['x-total-count']
        setTotalPage(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const nextIndex = () => { return posts[posts.length - 1].id + 1 }

    const removePost = (post) => setPosts(posts.filter(p => p.id !== post.id))

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick = {() => setModal(true)}>Add Post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} nextIndex={nextIndex}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <hr style={{margin: '15px 0'}}/>

            {postError &&
                <h1>Error: {postError}</h1>
            }

            {isPostLoading
                ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div>
                : <PostList posts={sortedAndSearchPost} title="Post list" remove={removePost}/>
            }
            <MyPagination page={page} pageArray={pageArray} setPage={setPage}></MyPagination>

        </div>
    );
};

export default Posts;