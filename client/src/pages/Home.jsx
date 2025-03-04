import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import FadeTransition from '../components/FadeTransition';

const COMMON_WORDS = [
  "the", "be", "to", "of", "and", "a", "in", "that", "have", "I",
  "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
  "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
  "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
  "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
  "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
  "people", "into", "year", "your", "good", "some", "could", "them", "see", "other",
  "than", "then", "now", "look", "only", "come", "its", "over", "think", "also",
  "back", "after", "use", "two", "how", "our", "work", "first", "well", "way",
  "even", "new", "want", "because", "any", "these", "give", "day", "most", "us"
];

const Home = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  const inputRef = useRef(null);

  // Function to generate random text from common words
  const generateRandomText = () => {
    const selectedWords = [];
    const tempWords = [...COMMON_WORDS];
    
    for (let i = 0; i < 30 && tempWords.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * tempWords.length);
      selectedWords.push(tempWords[randomIndex]);
      tempWords.splice(randomIndex, 1);
    }
    
    return selectedWords.join(" ");
  };

  // Generate random text when component mounts
  useEffect(() => {
    const newText = generateRandomText();
    setText(newText);
  }, []);

  useEffect(() => {
    // Start timer on first keystroke
    if (userInput.length === 1 && !startTime) {
      setStartTime(new Date());
    }

    // Check if the test is complete and navigate to results
    if (text && userInput && userInput === text && startTime) {
      const timeElapsed = (new Date() - startTime) / 1000 / 60; // in minutes
      const wordsTyped = text.split(" ").length;
      const wpm = Math.round(wordsTyped / timeElapsed);
      
      // Calculate accuracy
      let correctChars = 0;
      for (let i = 0; i < text.length; i++) {
        if (userInput[i] === text[i]) {
          correctChars++;
        }
      }
      const accuracy = Math.round((correctChars / text.length) * 100);
      
      navigate('/results', { 
        state: { 
          wpm, 
          accuracy 
        }
      });
    }
  }, [userInput, text, startTime, navigate]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
  };

  const resetTest = () => {
    setUserInput("");
    setStartTime(null);
    setIsComplete(false);
    setText(generateRandomText());
    inputRef.current.focus();
  };

  const renderText = () => {
    return text.split('').map((char, index) => {
      let className = '';
      if (index < userInput.length) {
        className = userInput[index] === char ? 'text-success' : 'text-danger';
      }
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <FadeTransition>
      <div className="container py-4">
        <div className="row mb-4">
          <div className="col">
            <h1 className="display-4">Type Digest</h1>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div className="card">
              <div className="card-body fs-5">
                {renderText()}
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <textarea
              ref={inputRef}
              value={userInput}
              onChange={handleInputChange}
              className="form-control fs-5"
              placeholder="Start typing..."
              rows={4}
              autoFocus
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button
              onClick={resetTest}
              className="btn btn-dark"
            >
              Reset Test
            </button>
          </div>
        </div>
      </div>
    </FadeTransition>
  );
};

export default Home;