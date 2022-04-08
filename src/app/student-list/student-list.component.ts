import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student, StudentResponse } from '../models/models';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Output() sendDelete = new EventEmitter<Student>();
  public studentList: Student[];
  /* filterPost = ''; */

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getStudents().subscribe((res: StudentResponse) => {
        this.studentList = res.results;
      });
  }

  /* public handleDelete():void{
    this.sendDelete.emit(this.student);

  } */

}
