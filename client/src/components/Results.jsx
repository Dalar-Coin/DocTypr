import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FadeTransition from './FadeTransition';

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { wpm, accuracy } = location.state || { wpm: 0, accuracy: 0 };

  return (
    <FadeTransition>
      <div className="container py-4">
      <div className="row mb-4">
        <div className="col">
          <h1 className="display-4">Test Results</h1>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="text-center">
                    <h2 className="display-1">{wpm}</h2>
                    <h3 className="text-muted">Words Per Minute</h3>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="text-center">
                    <h2 className="display-1">{accuracy}%</h2>
                    <h3 className="text-muted">Accuracy</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="d-flex gap-3">
            <button
              onClick={() => navigate('/')}
              className="btn btn-primary"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate('/register')}
              className="btn btn-outline-primary"
            >
              Register Here
            </button>
          </div>
        </div>
      </div>
    </div>
    </FadeTransition>
  );
};

export default Results;