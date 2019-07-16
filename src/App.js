import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ExcercisesList from './components/ExercisesList';
import EditExercises from './components/EditExercise';
import CreateExercises from './components/CreateExercise';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>   
      <div className='container'>
        <Navbar />
        <br />
        <Route path='/' exact component={ExcercisesList} />
        <Route path='/edit/:id' exact component={EditExercises} />
        <Route path='/create' exact component={CreateExercises} />
        <Route path='/user' exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
