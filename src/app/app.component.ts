import { Component } from '@angular/core';
import { Routine } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routine_note';

  routines: Routine[] =[]
  newRoutine!:string;

  saveRoutine(){
    if(this.newRoutine){
      let routine = new Routine();
      routine.name = this.newRoutine;
      routine.iscompleted=true;
      this.routines.push(routine);
      this.newRoutine='';
    }
    else{
      alert("please enter Routine!!");
    }
  }

  done(a:number){
    this.routines[a].iscompleted= !this.routines[a].iscompleted;
  }

  remove(a:number){
    this.routines=this.routines.filter((v,i) => i !==a);
  }
}
