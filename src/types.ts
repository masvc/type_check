export interface Question {
  text: string;
  options: {
    text: string;
    scores: {
      youkya: number;
      inkya: number;
      nekura: number;
      neaka: number;
    };
  }[];
} 