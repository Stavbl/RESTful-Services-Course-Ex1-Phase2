import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from "../services/user.service";
import { UserChannel } from "app/models/user";

@Component({
  selector: 'app-user-channels',
  templateUrl: './user-channels.component.html',
  styleUrls: ['./user-channels.component.css']
})
export class UserChannelsComponent implements OnInit {

  channels: UserChannel[];
  rows: UserChannel[][] = [];

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  submit(form:NgForm) {
    var id = form.value.id;
    this.userService.getUserChannels(id).then((res)=> {
      this.channels = res.data[0].channels;
      this.rows = [];
      for (let i = 0; i < this.numRows(); i++) {
        this.rows.push(this.getRow(i));
      }
    });
  }

  numRows(): number {
    return Math.max(Math.ceil((this.channels.length) / 3), 0);
  }

  getRow(i: number) {
    const startIndex = (i) * 3;
    return this.channels.slice(startIndex, startIndex + 3);
  }

}
