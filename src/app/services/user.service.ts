import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { ReqOne, ReqTwo } from '../models/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private base_url: String = 'https://ws-gady2.herokuapp.com';

  constructor(private http: Http) { }

  getAllUsers(): Promise<ReqOne> { 
    return this.http.get(this.base_url + '/getAllUsers').toPromise().then((res) => res.json() as ReqOne);
  }

  getUserChannels(id:string) : Promise<ReqTwo> {
    return this.http.get(this.base_url + '/getUserChannels/'+id).toPromise().then((res)=> res.json() as ReqTwo);
  }

}
