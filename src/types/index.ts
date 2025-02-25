export interface Scores {
  youkya: number;
  inkya: number;
  nekura: number;
  neaka: number;
}

export interface Option {
  text: string;
  scores: Scores;
}

export interface Question {
  text: string;
  options: Option[];
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
} 