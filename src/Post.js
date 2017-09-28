import React, { Component } from 'react'
import './post.css'
import PostBody from './PostBody'
import CommentBox from './CommentBox'

class Post extends Component {
  render() {
    let { id } = this.props.match.params
    return (
      <div className='post'>
        <div className="upper">
          <PostBody postId={id}/>
        </div>
        <div className='bottom'>
          <CommentBox postId={id}/>
        </div>
      </div>
    )
  }
}
export default Post
