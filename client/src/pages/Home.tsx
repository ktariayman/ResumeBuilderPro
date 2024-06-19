import React from 'react';
import useAuthStore from '../stores/auth.store';

const Home = () => {
  const { logout } = useAuthStore();
  return <button onClick={logout}>logout</button>;
};

export default Home;
