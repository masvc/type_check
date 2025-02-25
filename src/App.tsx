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
    setScores({
      youkya: scores.youkya + newScores.youkya,
      inkya: scores.inkya + newScores.inkya,
      nekura: scores.nekura + newScores.nekura,
      neaka: scores.neaka + newScores.neaka
    });
    setCurrentQuestion(prev => prev + 1);
  };

  return (
    <div className="container">
      <h1 style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
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
        <ResultView scores={scores} />
      )}
    </div>
  );
};

export default App; 