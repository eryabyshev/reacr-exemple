import PostItem from "./PostItem";
import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if(!posts.length) {
        return (<h2 style={{textAlign: 'center'}}>Not found</h2>)
    }
    return (
      <div>
          <h1 style={{textAlign : 'center'}}>{title}</h1>

          <TransitionGroup>
              {posts.map((post) =>
                  <CSSTransition
                        key={post.id}
                        timeout={200}
                        className="post"
                  >
                      <PostItem post = {post} remove={remove}/>
                  </CSSTransition>
              )}

          </TransitionGroup>


      </div>
    );
}

export default PostList;