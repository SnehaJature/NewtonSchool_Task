import React, { useContext } from 'react';
import UserContext from './UserContext';

const Home = () => {
    const { user, login, logout } = useContext(UserContext);

    return (
        <div>
            <p>Welcome, {user ? user.username : 'Guest'}</p>
            <button onClick={() => login('John')}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Home;
