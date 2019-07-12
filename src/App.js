import React from 'react';
import './App.css';
import Layout from './hoc/Layout';
import Home from './containers/Home/Home';

function App() {
  return (
    <>
      <Layout>
        <Home/>
      </Layout>
    </>
  );
}

export default App;
