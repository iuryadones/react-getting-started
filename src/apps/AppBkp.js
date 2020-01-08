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
// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }
//
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );


// App 22
// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <Post
//       key={post.id}
//       id={post.id}
//       title={post.title}
//       content={post.content}
//     />
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }
//
// function Post(props) {
//   console.log(props)
//   return (
//     <div key={props.id}>
//       <h3>{props.title}</h3>
//       <p>{props.content}</p>
//     </div>
//   )
// }
//
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );

// App 23
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''}
//
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     alert('Um nome foi enviado: ' + this.state.value);
//     event.preventDefault()
//   }
//
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Nome:
//           </label>
//           <p>
//             <input
//               type="text"
//               value={this.state.value}
//               onChange={this.handleChange}
//             />
//           </p>
//           <input type="submit" value="Enviar" />
//         </form>
//       </div>
//     )
//   }
// }
//
// class EssayForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: 'Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.'
//     };
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     alert('Uma dissertação foi enviada: ' + this.state.value);
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Dissertação:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Enviar" />
//       </form>
//     )
//   }
// }
//
// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coco'};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     alert('Seu sabor favorito é: ' + this.state.value);
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Escolha seu sabor favorito:
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="laranja">Laranja</option>
//               <option value="limao">Limão</option>
//               <option value="coco">Coco</option>
//               <option value="manga">Manga</option>
//             </select>
//           </label>
//           <input type="submit" value="Enviar" />
//         </form>
//       </div>
//     )
//   }
// }
//
// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };
//
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }
//
//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;
//
//     this.setState({
//       [name]: value
//     });
//   }
//
//   render() {
//     return (
//       <form>
//         <label>
//           Estão indo:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Número de convidados:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     )
//   }
// }
//
//
// function App() {
//   return (
//     // <NameForm />
//     // <EssayForm />
//     // <FlavorForm />
//     <Reservation />
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// App 24
// ReactDOM.render(
//   <input value="hi" />,
//   document.getElementById('root')
// );

// App 25
// ReactDOM.render(
//   <input value="hi" />,
//   document.getElementById('root')
// )
//
// setTimeout(
//   function() {
//     ReactDOM.render(<input value={null} />,
//     document.getElementById('root'))
//   },
//   1000
// )


// App 26
// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>A água ferveria.</p>;
//   }
//   return <p>A água não ferveria.</p>;
// }
//
// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }
//
//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }
//
//   render() {
//     const temperature = this.state.temperature;
//     return (
//       <fieldset>
//         <legend>Informe a temperatura em Celsius:</legend>
//         <input
//           value={temperature}
//           onChange={this.handleChange} />
//
//         <BoilingVerdict
//           celsius={parseFloat(temperature)} />
//
//       </fieldset>
//     );
//   }
// }
//
// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };
//
// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }
//
//   handleChange(e) {
//     // this.setState({temperature: e.target.value});
//     this.props.onTemperatureChange(e.target.value);
//   }
//
//   render() {
//     // Antes: const temperature = this.state.temperature;
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Informe a temperatura em {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }
//
// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }
//
// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }
//
// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }
//
// class CalculatorTemperature extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: ''};
//   }
//
//   handleCelsiusChange(temperature) {
//     this.setState({
//       scale: 'c', temperature
//     })
//   }
//
//   handleFahrenheitChange(temperature) {
//     this.setState({
//       scale: 'f', temperature
//     })
//   }
//
//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict
//           celsius={parseFloat(temperature)} />
//         <Calculator />
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <CalculatorTemperature />,
//   document.getElementById('root')
// )
//


// App 27
// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }
//
// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         {props.title}
//       </h1>
//       <p className="Dialog-message">
//         {props.message}
//       </p>
//     </FancyBorder>
//   );
// }
//
// function WelcomeDialog() {
//   return (
//     <Dialog
//       title="Bem-vindo"
//       message="Obrigado por visitar a nossa espaçonave!" />
//
//   );
// }
//
// ReactDOM.render(
//   <WelcomeDialog />,
//   document.getElementById('root')
// );

// App 28
// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }
//
// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         {props.title}
//       </h1>
//       <p className="Dialog-message">
//         {props.message}
//       </p>
//       {props.children}
//     </FancyBorder>
//   );
// }
//
// class SignUpDialog extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSignUp = this.handleSignUp.bind(this)
//     this.state = {login: ''}
//   }
//
//   render() {
//     return (
//       <Dialog title="Programa de Exploração de Marte"
//               message="Como gostaria de ser chamado?">
//         <input value={this.state.login}
//                onChange={this.handleChange} />
//
//         <button onClick={this.handleSignUp}>
//           Cadastre-se!
//         </button>
//       </Dialog>
//     )
//   }
//
//   handleChange(e) {
//     this.setState({login: e.target.value})
//   }
//
//   handleSignUp() {
//     alert(`Bem-vindo a bordo, ${this.state.login}!`)
//   }
// }
//
// ReactDOM.render(
//   <SignUpDialog />,
//   document.getElementById('root')
// );
