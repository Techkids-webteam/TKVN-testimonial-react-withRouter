import React from 'react'
import { render } from 'react-dom'
// First we import some modules...
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

// Then we delete a bunch of code from App and
// add some <Link> elements...
const App = React.createClass({
  render() {
    return (
      <div className="container">
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
        <h1>App</h1>
        {/* change the <a>s to <Link>s */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/users/ryan">/users/ryan</Link></li>
          <li><Link to="/duy">Duy Lady</Link></li>
        </ul>

        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        {this.props.children}
      </div>
    )
  }
})



const Home = () => (
  <div>
    <h2>Home!</h2>
  </div>
)
const About = () => (
  <div>
    <h3>About</h3>
  </div>
)
const Inbox = () => (
  <div>
    <h2>Inbox</h2>
  </div>
)

const Users = ({ children }) => (
  <div>
    <h2>Users</h2>
    {children}
  </div>
)
const UsersIndex = () => (
  <div>
    <h3>UsersIndex</h3>
  </div>
)
const User = ({ params: { id } }) => (
  <div>
    <h3>User param is {id}</h3>
  </div>
)



const Authors = ({ children }) => (
  <div>
    <h2>Authors</h2>
    {children}
  </div>
)
const AuthorsIndex = () => (
  <div>
    <h3>This is default Authors Index when you routing localhost:8080/duy/ </h3>
  </div>
)
const Author = ({ params: { id } }) => (
  <div>
    <h3>Author param is {id}</h3>
    <p>This is default Authors Index when you routing localhost:8080/duy/{id}</p>
  </div>
)



// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
      <Route path="users" component={Users}>
        <IndexRoute component={UsersIndex}/>
        <Route path=":id" component={User}/>
      </Route>
      <Route path="duy" component={Authors}>
        <IndexRoute component={AuthorsIndex}/>
        <Route path=":id" component={Author}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
