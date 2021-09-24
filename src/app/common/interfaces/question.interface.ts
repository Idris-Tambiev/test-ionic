import { Answer } from '../interfaces/answer.interface';

export interface Question{
  questionNumber: number;
  questionText: string;
  answers: Answer[];
}
