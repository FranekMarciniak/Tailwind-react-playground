import React from 'react';
import './index.css';
import Layout from './Layout';
import { Route } from "wouter";
import Home from './Home';
import Cards from './Cards';

function App() {
  return (
    <Layout >
      <Route path="/">
        <Home />
      </Route>      
      <Route path="/cards">
        <Cards />
      </Route>
    </Layout>
  );
}

export default App;
