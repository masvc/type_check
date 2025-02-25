import { Question } from '../types';

export const questions: Question[] = [
  {
    text: "休日の過ごし方は？",
    options: [
      {
        text: "友達と外出",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 1 }
      },
      {
        text: "家でゆっくり",
        scores: { youkya: 0, inkya: 2, nekura: 1, neaka: 0 }
      }
    ]
  },
  {
    text: "新しい環境での行動は？",
    options: [
      {
        text: "積極的に話しかける",
        scores: { youkya: 2, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "様子を見る",
        scores: { youkya: 0, inkya: 2, nekura: 1, neaka: 0 }
      }
    ]
  },
  {
    text: "困っている人を見かけたら？",
    options: [
      {
        text: "声をかけて助ける",
        scores: { youkya: 1, inkya: 0, nekura: 0, neaka: 2 }
      },
      {
        text: "見守る",
        scores: { youkya: 0, inkya: 1, nekura: 2, neaka: 0 }
      }
    ]
  }
]; 