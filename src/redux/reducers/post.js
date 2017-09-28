let  posts = [
  {
    id:'111',
    title:'hello git'
  },
  {
    id:'222',
    title:'hello redux'
  }
]
export default function postReducer(state=posts,action){
  switch(action.type){
    case 'xxx':
      return state
      default:
      return state
  }
}
