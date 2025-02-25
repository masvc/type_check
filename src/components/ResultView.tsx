import React from 'react';
import { ResultViewProps } from '../types';

const ResultView: React.FC<ResultViewProps> = ({ scores }) => {
  const getMaxType = () => {
    const types = [
      { name: '陽キャ', score: scores.youkya },
      { name: '陰キャ', score: scores.inkya },
      { name: 'ネクラ', score: scores.nekura },
      { name: 'ネアカ', score: scores.neaka }
    ];
    return types.reduce((max, type) => 
      type.score > max.score ? type : max
    );
  };

  const maxType = getMaxType();

  return (
    <div className="result-container">
      <h2 className="result-title">診断結果</h2>
      <div className="result-type">
        あなたは「{maxType.name}」タイプです！
      </div>
      <div className="score-list">
        <div>陽キャ度: {scores.youkya}</div>
        <div>陰キャ度: {scores.inkya}</div>
        <div>ネクラ度: {scores.nekura}</div>
        <div>ネアカ度: {scores.neaka}</div>
      </div>
    </div>
  );
};

export default ResultView; 