import {useMemo} from "react";

export const useSortedPost = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort) {
            return [...posts]
                .sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
            return posts
        }
    }, [sort, posts])

    return sortedPosts;
}

export const usePost = (posts, sort, query) => {
    const sortedPosts = useSortedPost(posts, sort)
    const sortedAndSearchPost = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchPost;
}