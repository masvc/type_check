import React from 'react';
import { ResultViewProps } from '../types';

const ResultView: React.FC<ResultViewProps> = ({ scores }) => {
  // タイプ判定ロジック
  const determineType = () => {
    const isYoukya = scores.youkya >= scores.inkya;
    const isNeaka = scores.neaka >= scores.nekura;
    
    if (isYoukya) {
      return isNeaka ? "陽キャ×根アカ" : "陽キャ×根クラ";
    }
    return isNeaka ? "陰キャ×根アカ" : "陰キャ×根クラ";
  };

  // タイプ説明文
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

  // マトリックス上の位置計算（10-90%の範囲に制限）
  const calculatePosition = () => {
    const total = {
      x: scores.youkya + scores.inkya,
      y: scores.neaka + scores.nekura
    };
    
    const position = {
      x: total.x === 0 ? 50 : (scores.youkya / total.x) * 100,
      y: total.y === 0 ? 50 : (scores.neaka / total.y) * 100
    };

    return {
      left: `${Math.min(90, Math.max(10, position.x))}%`,
      top: `${Math.min(90, Math.max(10, 100 - position.y))}%`
    };
  };

  // Twitterシェア用のURLを生成
  const getShareUrl = (type: string, description: string) => {
    const text = encodeURIComponent(
      `私は「${type}」タイプでした！\n\n${description}\n\n#2x2タイプ診断 #診断メーカー`
    );
    const url = encodeURIComponent(window.location.href);
    return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  };

  const type = determineType();
  const description = getDescription(type);
  const position = calculatePosition();
  const shareUrl = getShareUrl(type, description);

  return (
    <div className="result-container visible">
      <div className="result-type-container">
        {/* タイプ表示 */}
        <div className="result-type">
          あなたは<span className="type-highlight">{type}</span>タイプです
        </div>
        
        {/* 説明文 */}
        <p className="result-description">{description}</p>
        
        {/* マトリックス表示 */}
        <div className="matrix-container">
          {/* 軸ラベル */}
          <div className="matrix-label matrix-label-top">根アカ</div>
          <div className="matrix-label matrix-label-bottom">根クラ</div>
          <div className="matrix-label matrix-label-left">陰キャ</div>
          <div className="matrix-label matrix-label-right">陽キャ</div>
          
          {/* グリッド線 */}
          <div className="matrix-line matrix-line-horizontal" />
          <div className="matrix-line matrix-line-vertical" />
          
          {/* 象限ラベル */}
          <div className="quadrant-label" style={{ top: '20%', left: '20%' }}>
            陰キャ×根アカ
          </div>
          <div className="quadrant-label" style={{ top: '20%', left: '80%' }}>
            陽キャ×根アカ
          </div>
          <div className="quadrant-label" style={{ top: '80%', left: '20%' }}>
            陰キャ×根クラ
          </div>
          <div className="quadrant-label" style={{ top: '80%', left: '80%' }}>
            陽キャ×根クラ
          </div>
          
          {/* 位置マーカー */}
          <div 
            className="matrix-marker" 
            style={position}
          />
        </div>

        {/* SNSシェアボタン */}
        <div className="share-section">
          <p className="share-text">シェアはこちらから</p>
          <div className="share-buttons">
            <a 
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="share-button twitter"
            >
              <i className="icon-twitter"></i>
              Twitterでシェア
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultView; 