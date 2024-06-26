import './App.css';
import React from "react";
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Route, Switch } from "react-router-dom";
import './snapit_api/axiosDefaults';
import RegisterForm from './pages/auth/RegisterForm';
import LogInForm from './pages/auth/LogInForm';
import SnapCreate from './pages/snaps/SnapCreate';
import Snap from './pages/snaps/Snap';
import SnapFeed from './pages/snaps/SnapFeed';
import SnapsFeed from './pages/snaps/SnapsFeed';
import SnapEdit from './pages/snaps/SnapEdit';
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ProfileEdit from './pages/profiles/ProfileEdit';
import ProfilePage from './pages/profiles/ProfilePage';
import UserPassword from './pages/profiles/UserPassword';
import UserUsername from './pages/profiles/UserUsername';
import { MessageProvider } from './contexts/MessageContext';  // Import MessageProvider
import Messages from './components/Messages';  // Import Messages component
import ProfileDelete from './pages/profiles/ProfileDelete';

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <MessageProvider>
      <div className="App">
        <NavBar />
        <Messages />  {/* Add Messages component here */}
        <Container className="Down">
          <Switch>
            <Route exact path="/" render={() => <SnapsFeed message="Welcome to SnapIt!" />} />
            <Route exact path="/liked/feed" render={() => (
              <SnapsFeed
                message="No results found. Adjust the search keyword or follow a user."
                filter={`snaplikes__owner__profile=${profile_id}&ordering=-snaplikes__created&`}
              />
            )} />
            <Route exact path="/disliked/feed" render={() => (
              <SnapsFeed
                message="No results found. Adjust the search keyword or follow a user."
                filter={`snapdislikes__owner__profile=${profile_id}&ordering=-snapdislikes__created&`}
              />
            )} />
            <Route exact path="/login" render={() => <LogInForm />} />
            <Route exact path="/register" render={() => <RegisterForm />} />
            <Route exact path="/snaps/create" render={() => <SnapCreate />} />
            <Route path="/profiles/:id/delete" render={() => <ProfileDelete />} />
            <Route exact path="/snaps/:id/edit" render={() => <SnapEdit />} />
            <Route exact path="/snaps/:id" render={() => <SnapFeed />} />
            <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
            <Route exact path="/profiles/:id/edit/username" render={() => <UserUsername />} />
            <Route exact path="/profiles/:id/edit/password" render={() => <UserPassword />} />
            <Route exact path="/profiles/:id/edit" render={() => <ProfileEdit />} />
            <Route render={() => <p>Page not found!</p>} />
          </Switch>
        </Container>
      </div>
    </MessageProvider>
  );
}

export default App;
