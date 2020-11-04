import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal [] = [
    new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
    new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
    new Goal(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
    new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
  ]

  toggleDetails(index){
    console.log("index----->",this.goals[index].showDescription);
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index){
    if (isComplete){
      this.goals.splice(index, 1);
    }
  }
  
  deleteGoal(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`are you sure you want todelete ${this.goals[index].name}?`)
      
      if (toDelete){
        this.goals.splice(index, 1);
      }
    }
  }

  addNewGoal(goal:Goal){
    console.log(goal);

    if(goal){

      let goalLength = this.goals.length
      goal.id = goalLength + 1;
      // goal.completeDate = new Date(goal.completeDate)
      this.goals.push(goal);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
