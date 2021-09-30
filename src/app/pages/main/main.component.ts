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

   ngOnDestroy() {
   }
}
