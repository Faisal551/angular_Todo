import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Task } from '../../model/task';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
      taskobj:Task=new Task()
      taskArr:Task[]=[]
      addTaskValue:string=""  
      editTaskValue:string="" 
      editTaskobj:Task=new Task()
   
  
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.taskobj=new Task()
    this.getAllTasks()
  }
  getAllTasks(){
    this.crudService.getAllTasks().subscribe((res:any)=>{
      console.log("ss",res)
      this.taskArr=res
    },(err:any)=>{
      alert("unable to find")
    })
  }
 addTask(){
   this.taskobj.task_name=this.addTaskValue
   this.crudService.addTask(this.taskobj).subscribe((res:any)=>{
     this.ngOnInit()
     this.addTaskValue=""
   },(err:any)=>{
     alert(err)
   })
 }
 getTask(eTask:Task){
  this.editTaskobj=eTask
   this.editTaskValue=this.editTaskobj.task_name
}
 editTask(){
  this.editTaskobj.task_name=this.editTaskValue
  this.crudService.editTask(this.editTaskobj).subscribe((res:any)=>{
    this.ngOnInit()
    this.editTaskValue=""
  },(err:any)=>{
    alert(err)
  })
}
deleteTask(eTask:Task){
  this.crudService.deleteTask(eTask).subscribe((res:any)=>{
    this.ngOnInit()
  },(err:any)=>{
    alert(err)
  })
}
}
