export interface Scores {
  youkya: number;
  inkya: number;
  nekura: number;
  neaka: number;
}

export interface ProgressBarProps {
  current: number;
  total: number;
}

export interface QuestionListProps {
  questions: Question[];
  currentQuestion: number;
  onAnswer: (scores: Scores) => void;
}

export interface ResultViewProps {
  scores: Scores;
  onReset: () => void;
}

export interface Question {
  text: string;
  options: {
    text: string;
    scores: Scores;
  }[];
}

export interface Option {
  text: string;
  points: Scores;
}

export interface Choice {
  text: string;
  scores: Scores;
}

export interface Result {
  type: string;
  description: string;
  scores: {
    youkya: number;
    inkya: number;
    nekura: number;
    neaka: number;
  };
}