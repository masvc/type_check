import React from 'react';
import { QuestionListProps } from '../types';

const QuestionList: React.FC<QuestionListProps> = ({ questions, onAnswer, currentQuestion }) => {
  const currentQ = questions[currentQuestion];

  return (
    <div className="question-container">
      <h2 className="question-text">{currentQ.text}</h2>
      <div className="options-list">
        {currentQ.options.map((option, index) => (
          <button
            key={index}
            className={`option-button option-${String.fromCharCode(65 + index)}`}
            onClick={() => onAnswer(option.scores)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionList; 