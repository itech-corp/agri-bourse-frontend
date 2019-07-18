import React from 'react';
import './App.css';
import Layout from './hoc/Layout';
import Home from './containers/Home/Home';
import LoginPage from './containers/Login/Login';
import SignUp from './containers/SignUp/SignUp';

function App() {
  return (
    <>
      <Layout>
        <SignUp />
      </Layout>
    </>
  );
}

export default App;
