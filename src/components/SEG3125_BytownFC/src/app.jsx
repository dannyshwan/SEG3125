import React from 'react';
import './styles/app.scss';
import Header from './components/header';
import { Router } from './components/router';

function App() {
  return (
    <div>
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
