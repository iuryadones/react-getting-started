import React from 'react'

// App 8
// function formatDate(date) {
//   return date.toLocaleDateString()
// }
//
// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//
//   );
// }
//
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <Avatar user={props.author}/>
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }
//
// const comment = {
//   date: new Date(),
//   text: 'Ola mundo, text2tag saindo!',
//   author: {
//     'avatarUrl': 'https://placekitten.com/g/64/64',
//     'name': 'Kurier',
//   },
// }
//
// function App() {
//   return (
//     <div>
//       <Comment
//         author={comment.author}
//         text={comment.text}
//         date={comment.date}
//       />
//     </div>
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )