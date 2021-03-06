import React, { Component } from 'react'
import './post-body.css'
import  { connect } from 'react-redux'

class PostBody extends Component {
  render() {
    const { postId } = this.props
    let thisComments = this.props.comments.filter(item => (
      item.post === postId
    ))
    return (
      <div className='post-body'>
        <div className='comment-no'>
          {thisComments.length}评论
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments:state.comments
})
export default connect(mapStateToProps)(PostBody)
