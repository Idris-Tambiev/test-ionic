import { Component, OnDestroy, OnInit } from '@angular/core';
import { Question } from 'src/app/common/interfaces/question.interface';
import { UserAnswers } from 'src/app/common/interfaces/user-answers.interface';
import data from 'src/assets/test/test.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit, OnDestroy {
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

  selectAnswer(event) {
   const idx = this.myAnswers.findIndex((ans)=> ans.questionId === this.currentQuestion.questionNumber);
    if (idx !== -1){
      this.myAnswers[this.currentQuestionIndex].answerId =  event.detail.value;
    }else {
      const answer: UserAnswers = {
        questionId: this.currentQuestion.questionNumber,
        answerId: event.detail.value
      };
      this.myAnswers.push(answer);
    }
  }

   ngOnDestroy() {
   }
}
