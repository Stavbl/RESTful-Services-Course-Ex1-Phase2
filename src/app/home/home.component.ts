import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { User } from '../models/user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];
  rows: User[][] = [];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().then((res)=> {
      this.users = res.data;
      this.rows = [];
      for (let i = 0; i < this.numRows(); i++) {
        this.rows.push(this.getRow(i));
      }
    });
  }

  numRows(): number {
    return Math.max(Math.ceil((this.users.length) / 3), 0);
  }

  getRow(i: number) {
    const startIndex = (i) * 3;
    return this.users.slice(startIndex, startIndex + 3);
  }

}
