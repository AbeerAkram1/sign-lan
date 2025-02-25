import React from 'react';
import QuizComponent from './quiz/QuizComponent'; // Import the QuizComponent
import './App.css';

function App() {
  return (
    <div>
      <h1>Welcome to the Sign Language Quiz</h1>
      <QuizComponent /> {/* Adding QuizComponent */}
    </div>
  );
}

export default App;
