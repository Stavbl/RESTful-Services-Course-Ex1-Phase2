import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { ReqThree } from '../models/channel';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChannelService {

 private base_url: String = 'https://ws-gady2.herokuapp.com';

  constructor(private http: Http) { }

  getAllChannels(): Promise<ReqThree> { 
    return this.http.get(this.base_url + '/getAllChannels').toPromise().then((res) => res.json() as ReqThree);
  }
}
