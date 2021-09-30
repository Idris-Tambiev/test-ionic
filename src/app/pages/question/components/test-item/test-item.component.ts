import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Question } from 'src/app/common/interfaces/question.interface';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.scss'],
})
export class TestItemComponent implements OnInit {
  @Input() question: Question = null;
  constructor(
    private testService: TestService,
  ) {
  }

  ngOnInit() {}

  selectAnswer(answerId: number){
    this.testService.selectAnswer(this.question.questionNumber, answerId);
  }
}
