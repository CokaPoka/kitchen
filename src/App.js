import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import QuestionSheet from './components/QuestionSheet/QuestionSheet';
import ButtonMenu from './components/ButtonMenu/ButtonMenu';
import Navbar from './components/Navbar/Navbar'
import GalleryContainer from './components/Home/containers/GalleryContainer/GalleryContainer';

function App() {

  const [buttonMenuOpen, setButtonMenuOpen] = useState(false)

  const buttonMenuClickHandler = () => {
    setButtonMenuOpen(true)
  }

  const buttonMenuClose = () => {
    setButtonMenuOpen(false)
  }

  let backdrop;

  if (buttonMenuOpen === true) {
    backdrop = <ButtonMenu buttonMenuClose={buttonMenuClose} />
  }

  return (
   <Router>
      <Navbar buttonMenuClickHandler={buttonMenuClickHandler} show={buttonMenuOpen}/>
      {backdrop}
     <Switch>
        <Route path='/questionsheet'><QuestionSheet /></Route>
        <Route path='/gallery'><GalleryContainer /></Route>
        <Route path='/'><Home /></Route>
     </Switch>
   </Router>
  );
}

export default App;
