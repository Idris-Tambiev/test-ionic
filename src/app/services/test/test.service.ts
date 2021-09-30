import { Injectable } from '@angular/core';
import { UserAnswers } from 'src/app/common/interfaces/user-answers.interface';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  myAnswers: UserAnswers[] = [];
  constructor() { }

  selectAnswer( questionNumber, answerId) {
    const idx = this.myAnswers
                    .findIndex((ans) =>
                          ans.questionId === questionNumber
                          );
     if (idx !== -1){
       this.myAnswers[questionNumber-1].answerId =  answerId;
     }else {
       const answer: UserAnswers = {
         questionId: questionNumber,
         answerId
       };
       this.myAnswers.push(answer);
     }
   }
}
