import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/common/interfaces/question.interface';
import { UserAnswers } from 'src/app/common/interfaces/user-answers.interface';
import data from 'src/assets/test/test.json';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  myQuestions: Question[] = [];
  myAnswers: UserAnswers[] = [];
  currentQuestion: Question;
  currentQuestionIndex = 0;
  constructor() {}

  ngOnInit() {
    this.myQuestions = data;
    this.currentQuestion = this.myQuestions[this.currentQuestionIndex];
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.currentQuestion = this.myQuestions[this.currentQuestionIndex];
  }

  prevQuestion() {
    this.currentQuestionIndex--;
    this.currentQuestion = this.myQuestions[this.currentQuestionIndex];
  }

}
