import React, { useState } from 'react';
import QuestionList from './components/QuestionList';
import ResultView from './components/ResultView';
import ProgressBar from './components/ProgressBar';
import { questions } from './data/questions';
import { Scores } from './types';

const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Scores>({
    youkya: 0,
    inkya: 0,
    nekura: 0,
    neaka: 0
  });

  const handleAnswer = (newScores: Scores) => {
    setScores(prev => ({
      youkya: prev.youkya + newScores.youkya,
      inkya: prev.inkya + newScores.inkya,
      nekura: prev.nekura + newScores.nekura,
      neaka: prev.neaka + newScores.neaka
    }));
    setCurrentQuestion(prev => prev + 1);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setScores({
      youkya: 0,
      inkya: 0,
      nekura: 0,
      neaka: 0
    });
  };

  return (
    <div className="container">
      <h1 
        className="main-title"
        onClick={handleReset}
        style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          cursor: 'pointer'
        }}
      >
        2×2タイプ診断
      </h1>
      <ProgressBar current={currentQuestion} total={questions.length} />
      {currentQuestion < questions.length ? (
        <QuestionList
          questions={questions}
          currentQuestion={currentQuestion}
          onAnswer={handleAnswer}
        />
      ) : (
        <ResultView scores={scores} onReset={handleReset} />
      )}
    </div>
  );
};

export default App; 