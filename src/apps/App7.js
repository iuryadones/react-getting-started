import React from 'react'


function formatDate(date) {
  return date.toLocaleDateString()
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo" style={{float: 'left', width: '20%', textAlign: 'center'}}>
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div style={{float: 'left', width: '80%', textAlign:'left' }}>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    </div>
  );
}

function UserComment() {
  const comment = {
    date: new Date(),
    text: 'Hello World, Build Apps with React!',
    author: {
      'avatarUrl': 'https://placekitten.com/g/64/64',
      'name': 'Iury Adones',
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

export default UserComment
