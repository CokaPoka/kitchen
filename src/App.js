import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import QuestionSheet from './components/QuestionSheet/QuestionSheet';
import ButtonMenu from './components/ButtonMenu/ButtonMenu';
import Navbar from './components/Navbar/Navbar'
import GalleryContainer from './components/GalleryContainer/GalleryContainer';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

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
        <Route path='/contact'><Contact /></Route>
        <Route path='/questionsheet'><QuestionSheet /></Route>
        <Route path='/gallery'><GalleryContainer /></Route>
        <Route path='/'><Home /></Route>
     </Switch>
     <Footer />
   </Router>
  );
}

export default App;
