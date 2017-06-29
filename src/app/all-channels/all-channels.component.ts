import { Component, OnInit } from '@angular/core';
import { ChannelService } from "../services/channel.service";
import { Channel } from '../models/channel'

@Component({
  selector: 'app-all-channels',
  templateUrl: './all-channels.component.html',
  styleUrls: ['./all-channels.component.css']
})
export class AllChannelsComponent implements OnInit {
  channels: Channel[];
  rows: Channel[][] = [];

  constructor(private channelService:ChannelService) { }

  ngOnInit() {
    this.channelService.getAllChannels().then((res)=> {
      this.channels = res.data;
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
