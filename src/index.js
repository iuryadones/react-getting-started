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
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
