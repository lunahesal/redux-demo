import React, { Component } from 'react'
import './comment-box.css'
import store from './redux/store'
import  { connect } from 'react-redux'


class CommentBox extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const text = this.commentInput.value
    let { postId } = this.props
    store.dispatch({ type:'ADD_COMMENT',text,postId})

    this.commentInput.value = ''
  }
  render() {
    const { postId } = this.props
    let thisComments = this.props.comments.filter(item =>(
      item.post === postId
    ))
    let commentList = thisComments.slice().reverse().map((item,i) => (
      <li key={i}> {item.text} </li>
    ))
    let commentForm = (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={value => this.commentInput = value}/>
        <button type='submit'>提交</button>
      </form>
    )
    return (
      <div className='comment-box'>
        <div className='form'>
          { commentForm }
        </div>
        <ul className='comment-list'>
          {commentList}
        </ul>

      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  comments:state.comments
})
export default connect(mapStateToProps)(CommentBox)
