// Routes.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

const DogRoutes = ({ dogs }) => {
  return (
    
        <Routes>
            <Route path="/dogs" element={<DogList dogs={dogs} />} />
            <Route  exact path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
            <Route path="/" element={<Navigate to="/dogs" />} />
        </Routes>
      );

};

export default DogRoutes;
