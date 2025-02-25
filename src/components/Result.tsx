import React from 'react';
import { ResultViewProps } from '../types';

const ResultView: React.FC<ResultViewProps> = ({ scores }) => {
  const determineType = () => {
    const isYoukya = scores.youkya >= scores.inkya;
    const isNeaka = scores.neaka >= scores.nekura;
    
    if (isYoukya) {
      return isNeaka ? "陽キャ×根アカ" : "陽キャ×根クラ";
    }
    return isNeaka ? "陰キャ×根アカ" : "陰キャ×根クラ";
  };

  const getDescription = (type: string) => {
    switch (type) {
      case "陽キャ×根アカ":
        return "社交的で活発、新しいことに積極的にチャレンジするタイプです。周りを巻き込んで物事を進めることが得意で、リーダーシップを発揮することができます。";
      case "陽キャ×根クラ":
        return "社交的だが慎重派。周囲との関係を大切にしながら、着実に目標に向かって進むタイプです。";
      case "陰キャ×根アカ":
        return "物事を深く考察し、慎重に進めることを好むタイプ。確実性を重視し、着実に目標に向かっていきます。";
      default:
        return "静かに物事を考え、慎重に進めることを好むタイプ。独自の視点を持ち、着実に前進していきます。";
    }
  };

  const type = determineType();
  const description = getDescription(type);

  return (
    <div className="result-container visible">
      <div className="result-type-container">
        <div className="result-type">
          あなたは<span className="type-highlight">{type}</span>タイプです
        </div>
        <p className="result-description">{description}</p>
        <div className="matrix-container">
          <div className="matrix-label matrix-label-top">根アカ</div>
          <div className="matrix-label matrix-label-bottom">根クラ</div>
          <div className="matrix-label matrix-label-left">陰キャ</div>
          <div className="matrix-label matrix-label-right">陽キャ</div>
          <div className="matrix-line matrix-line-horizontal" />
          <div className="matrix-line matrix-line-vertical" />
          <div className="quadrant-label" style={{ top: '25%', left: '25%' }}>陰キャ×根アカ</div>
          <div className="quadrant-label" style={{ top: '25%', left: '75%' }}>陽キャ×根アカ</div>
          <div className="quadrant-label" style={{ top: '75%', left: '25%' }}>陰キャ×根クラ</div>
          <div className="quadrant-label" style={{ top: '75%', left: '75%' }}>陽キャ×根クラ</div>
          <div 
            className="matrix-marker" 
            style={{ 
              left: `${((scores.youkya / (scores.youkya + scores.inkya)) * 100)}%`,
              top: `${((scores.neaka / (scores.neaka + scores.nekura)) * 100)}%`
            }} 
          />
        </div>
      </div>
    </div>
  );
};

export default ResultView; 