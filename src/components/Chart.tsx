import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  
  canvas {
    max-width: 100%;
    height: auto !important;
  }
`;

// Chart.jsの設定でレスポンシブ対応を有効化
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  // ... その他の設定
}; 