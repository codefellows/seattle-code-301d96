import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import AuthButtons from './Auth/AuthButtons';
import Profile from './Profile';
import Content from './Content';

class App extends React.Component {
  render(){
    return(
      <>
        <div>
          Login or Logout with one component <AuthButtons />
        </div>


        {this.props.auth0.isAuthenticated &&
          <>
            <Profile />
            <Content />
          </>
        }
      </>
    )
  }

}

export default withAuth0(App);
