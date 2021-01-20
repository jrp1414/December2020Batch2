import { Component, OnInit } from '@angular/core';
import { StudentService } from '../students/services/student.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public ss:StudentService) { }

  ngOnInit(): void {
  }

}
