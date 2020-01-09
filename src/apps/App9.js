import React from 'react'

function formatDate(date) {
  return date.toLocaleDateString()
}

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'Hello World, Build Apps with React!',
  author: {
    'avatarUrl': 'https://placekitten.com/g/64/64',
    'name': 'Kurier',
  },
}

function CommentSplit() {
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


export default CommentSplit
