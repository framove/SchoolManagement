import { Student } from './../../models/models';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
  @Output() sendStudent = new EventEmitter<Student>();

  public student: Student;

  constructor() { }

  ngOnInit(): void {
    this.student = {
      gender: '',
    name: {
        title: '',
        first: '',
        last: '',
    },
    location: {
        street: '',
        city: '',
        state: '',
        postcode: 0,
        coordinates: {
          latitude: 0,
          longitude: 0,
        },
        timezone: {
          offset: 0,
          description: '',
        }
      },
      email: '',
      login: {
        uuid: '',
        username: '',
        password: '',
        salt: '',
        md5: '',
        sha1: '',
        sha256: '',
      },
      dob: {
        date: '',
        age: 26,
      },
      registered: {
        date: '',
        age: 17,
      },
      phone: '',
      cell: '',
      id: {
        name: '',
        value: '',
      },
      picture: {
        large: '',
        medium: '',
        thumbnail: '',
      },
      nat: '',
      
    }
  }

  
  public saveNewStudent(value:string): void {
    if(this.student) {
      this.student.name.first = value;
    }
  }

  public newStudent(): void {
    this.sendStudent.emit(this.student);
  }

}
