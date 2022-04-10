import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student, StudentResponse } from '../models/models';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public studentList: Student[];
  isNewStudentActive: boolean = false;
  /* filterPost = ''; */
  @Input() student!: Student;
  @Output() sendDelete = new EventEmitter<Student>();

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getStudents().subscribe((res: StudentResponse) => {
        this.studentList = res.results;
      });
  }

  public addStudent(): void{
    this.isNewStudentActive = true;
  }

  public back(): void{
    this.isNewStudentActive = false;
  }

  public handleDelete(): void {
    this.sendDelete.emit(this.student)
  }

  public handleStudent(student: Student): void {
    this.studentList.push(student);
    this.isNewStudentActive = false;
  }

  public deleteStudent(student: Student):void{
    const index = this.studentList.findIndex((item) => item.name === student.name);
    const list = this.studentList.splice(index, 1);
    console.log(list);
    
  }

}
