import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Task} from "../model/task"
@Injectable({
  providedIn: 'root'
})
export class CrudService {
    url:string="http://localhost:3000/tasks"

  constructor(private http:HttpClient) {

   }

   addTask(task:Task){
      return this.http.post(this.url,task)
   }
   getAllTasks(){
    return this.http.get(this.url)
 }
 getTask(task:Task){
  return this.http.get(`${this.url}/${task.id}`)
}
deleteTask(task:Task){
  return this.http.delete(`${this.url}/${task.id}`)
}
editTask(task:Task){
  return this.http.put(`${this.url}/${task.id}`,task)
}
}
