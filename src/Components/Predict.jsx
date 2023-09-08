import React, { useState } from 'react';

const Predict = () => {
  const [fear, setFear] = useState('');
  const [experiences, setExperiences] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleFearChange = (event) => {
    setFear(event.target.value);
  };

  const handleExperiencesChange = (event) => {
    setExperiences(event.target.value);
  };

  const predictCauseOfDeath = () => {
    // Perform your logic here to predict the cause of death based on fear and experiences
    // This is just a basic example and not a real prediction algorithm
    let causeOfDeath = '';

    if (fear === 'heights' && experiences === 'skydiving') {
      causeOfDeath = 'Fall from a great height';
    } else if (fear === 'water' && experiences === 'swimming') {
      causeOfDeath = 'Drowning';
    } else {
      causeOfDeath = 'Unknown';
    }

    setPrediction(causeOfDeath);
  };

  return (
    <div>
      <h1>Cause of Death Predictor</h1>
      <label htmlFor="fear">Fear:</label>
      <input
        type="text"
        id="fear"
        value={fear}
        onChange={handleFearChange}
      />

      <br />

      <label htmlFor="experiences">Experiences:</label>
      <input
        type="text"
        id="experiences"
        value={experiences}
        onChange={handleExperiencesChange}
      />

      <br />

      <button onClick={predictCauseOfDeath}>Predict</button>

      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
};

export default Predict;