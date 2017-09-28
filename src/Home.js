import React, { Component } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
  state = {

  }
  render() {
    const postList = this.props.posts.map(item=>(
      <Link key={item.id} className='post-item' to={`/post/${item.id}`}>
        {item.title}
      </Link>
    ))
    return (
      <div className='home'>
        { postList }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts:state.posts
})
export default connect(mapStateToProps)(Home)
