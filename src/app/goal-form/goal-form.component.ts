import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new Goal(0,"","",new Date());
  @Output() addGoal = new EventEmitter<Goal>();

  submitGoal(){
    console.log("locked and ready");
    
    this.addGoal.emit(this.newGoal);

    this.newGoal = new Goal(0,"","",new Date());
    
  }

  // console.log(newGoal);
  
  constructor() { }

  ngOnInit(): void {
  }

}
