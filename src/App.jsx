import React from 'react';
import UserContext, { UserProvider } from './component/UserContext';
import Home from './component/Home';

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <h1>Context API Demo</h1>
        <UserContext.Consumer>
          {(context) => (
            <p>User: {context.user ? context.user.username : 'Guest'}</p>
          )}
        </UserContext.Consumer>
        <Home />
      </div>
    </UserProvider>
  );
};

export default App;
