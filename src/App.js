import React from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';

import NavBar from './Nav';
import DogRoutes from './Routes';


import whiskey from './react-router-patterns/whiskey.jpg'
import duke from './react-router-patterns/duke.jpg'
import tubby from './react-router-patterns/tubby.jpg'
import perry from './react-router-patterns/perry.jpg'


const App = ({ dogs }) => {
  return (
    <div>
      <Router>
        <NavBar dogs={dogs} />
        <div className='container'>
          <DogRoutes dogs={dogs} />
        </div>
      </Router>
    </div>
  );
};

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
};

export default App;
