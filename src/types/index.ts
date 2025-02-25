export interface Scores {
  youkya: number;
  inkya: number;
  nekura: number;
  neaka: number;
}

export interface ResultViewProps {
  scores: Scores;
  onReset: () => void;
}

export interface Option {
  text: string;
  points: Scores;
}

export interface Question {
  text: string;
  options: Choice[];
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

export interface ProgressBarProps {
  current: number;
  total: number;
}

export interface QuestionListProps {
  questions: Question[];
  currentQuestion: number;
  onAnswer: (scores: Scores) => void;
}