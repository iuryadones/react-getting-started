import React from 'react'


function formatDate(date) {
  return date.toLocaleDateString()
}


function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />

  )
}


function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author}/>
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}


function CommentDict() {
  const comment = {
    date: new Date(),
    text: 'Hello World, Build Apps with React!',
    author: {
      'avatarUrl': 'https://placekitten.com/g/64/64',
      'name': 'Kurier',
    },
  }
  return (
    <div>
      <Comment
        author={comment.author}
        text={comment.text}
        date={comment.date}
      />
    </div>
  )
}

export default CommentDict
