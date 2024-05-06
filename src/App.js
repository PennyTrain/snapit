import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Route, Switch } from "react-router-dom";

// The Switch holds all our Routes,  and renders a given component when  
// a Route path matches the current URL. The render prop on our Route component  
// accepts a function that returns a component to  be rendered when the Route path is matched.
// The path prop is the browser url  the user will be at when they see  
// the component in our render prop. The “exact” prop tells the route to  
// only render its component when the  url entered is exactly the same.

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container className="Down">
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
        </Switch>
        <Switch>
          <Route exact path="/login" render={() => <h1>Log in</h1>} />
        </Switch>
        <Switch>
          <Route exact path="/register" render={() => <h1>Register</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
