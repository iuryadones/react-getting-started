import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// App 1
// const name = 'Iury Adones'
// var element = <h1>Hello, {name}!</h1>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// App 2
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
// const user = {
//   firstName: 'Iury',
//   lastName: 'Adones'
// };
//
// element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// App 3
// function getGreenting(user) {
//   if (Object.keys(user).length) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }
//
// const userNull = {};
//
// element = getGreenting(userNull);
//
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// App 4
// function tick() {
//   const element = (
//     <div>
//       {getGreenting(user)}
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);

// App 5
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
//
// var element = <Welcome name="Sara" />;
// ReactDOM.render(element, document.getElementById('root'));


// App 6
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
//
// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// App 7
// function formatDate(date) {
//   return date.toLocaleDateString()
// }
//
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
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

// App 9
// function formatDate(date) {
//   return date.toLocaleDateString()
// }
//
// function Avatar(props) {
//   return (
//     <img
//       className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }
//
// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }
//
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
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

// App 10
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
//
// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }
//
// setInterval(tick, 1000);

// App 11
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
//
// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }
//
// setInterval(tick, 1000);


// App 12
// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       date: new Date()
//     }
//   }
//
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     )
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
//
//   tick() {
//     this.setState({
//       date: new Date()
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     )
//   }
// }
//
// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//     </div>
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// App 13
// function activateLasers() {
//   console.log('Activate Lasers')
// }
//
// function App() {
//   return (
//     <div>
//       <button onClick={activateLasers}>
//         Ativar lasers
//       </button>
//     </div>
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// App 14
// function ActionLink() {
//   function handleClick(e){
//     e.preventDefault()
//     console.log('O link foi clicado.')
//   }
//
//   return (
//     <a href="#" onClick={handleClick}>
//       Clique Aqui
//     </a>
//   )
// }
//
// function App() {
//   return (
//     <div>
//     <ActionLink />
//     </div>
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// App 15
// class Toggle extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       isToggleOn: true
//     }
//     // Aqui utilizamos o `bind`
//     // para que o `this` funcione dentro da nossa callback
//     this.handleClick = this.handleClick.bind(this)
//   }
//
//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }))
//   }
//
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON': 'OFF'}
//       </button>
//     )
//   }
// }
//
// function App() {
//   return (
//     <div>
//     <Toggle />
//     </div>
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// App 16
// function UserGreeting(props) {
//   return <h1>Welcome Back!</h1>
// }
//
// function GuestGreenting(props) {
//   return <h1>Please sign up.</h1>
// }
//
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn){
//     return <UserGreeting />
//   }
//   return <GuestGreenting />
// }
//
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   )
// }
//
// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   )
// }
//
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }
//
//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }
//
//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }
//
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }
//
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }
//
// function App() {
//   return (
//     <div>
//       <LoginControl />
//     </div>
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// App 17
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   )
// }
//
// const messages = ['Msg 1', 'Msg 2']
//
// function App() {
//   return (
//     <div>
//       <Mailbox unreadMessages={messages} />
//     </div>
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// App 18
// function UserGreeting(props) {
//   return <h1>Welcome Back!</h1>
// }
//
// function GuestGreenting(props) {
//   return <h1>Please sign up.</h1>
// }
//
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn){
//     return <UserGreeting />
//   }
//   return <GuestGreenting />
// }
//
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   )
// }
//
// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   )
// }
//
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }
//
//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }
//
//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }
//
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//
//     button = (
//       isLoggedIn ? (
//          <LogoutButton onClick={this.handleLogoutClick} />
//       ) : (
//         <LoginButton onClick={this.handleLoginClick} />
//       )
//     )
//
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//         <p>
//           the user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//         </p>
//       </div>
//     );
//   }
// }
//
// function App() {
//   return (
//     <div>
//       <LoginControl />
//     </div>
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// App 19
// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }
//
//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }
//
// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: true};
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }
//
//   handleToggleClick() {
//     this.setState(state => ({
//       showWarning: !state.showWarning
//     }));
//   }
//
//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <Page />,
//   document.getElementById('root')
// );

// App 20
// function NumbersMap(props) {
//   const doubled = props.numbers.map((number) => number * 2)
//   console.log(doubled)
//   return doubled.toString()
// }
//
// function NumbersListMap(props) {
//   const doubled = props.numbers.map(
//     (number) =>
//       <li key={number.toString()}>
//         {number} * 2 = {number * 2}
//       </li>
//   )
//   return (
//     <ul>
//       {doubled}
//     </ul>
//   )
// }
//
// function NumbersListMap(props) {
//   const doubled = props.numbers.map(
//     (number, index) =>
//       <li key={index}>
//         {number} * 2 = {number * 2}
//       </li>
//   )
//   return (
//     <ul>
//       {doubled}
//     </ul>
//   )
// }
//
// const numbers = [1, 2, 3, 4, 5]
//
// function App(){
//   return (
//     <div>
//       <NumbersMap numbers={numbers} />
//       <NumbersListMap numbers={numbers} />
//     </div>
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// App 21
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
