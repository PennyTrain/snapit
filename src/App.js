import './App.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Route, Switch } from "react-router-dom";
import './snapit_api/axiosDefaults';
import RegisterForm from './pages/auth/RegisterForm';
import LogInForm from './pages/auth/LogInForm';
import SnapCreate from './pages/snaps/SnapCreate';
import Snap from './pages/snaps/Snaps';
import SnapFeed from './pages/snaps/SnapFeed';
import SnapsFeed from './pages/snaps/SnapsFeed'




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
          <Route exact path="/" render={() => <SnapsFeed />} />
          <Route exact path="/login" render={() => <LogInForm />} />
          <Route exact path="/register" render={() => <RegisterForm />} />
          <Route exact path="/snaps/create" render={() => <SnapCreate />}/>
          <Route exact path="/snaps" render={()=> <Snap />} />
          <Route exact path="/snaps/:id" render={() => <SnapFeed />}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
