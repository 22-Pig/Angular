import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  SERVER_URL = 'http://127.0.0.1:8080/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }
  getINFOS() {
    return this.httpClient.get(this.SERVER_URL + 'infos');
  }
  turnOn(id: string) {
    const obj = {
      id: id,
      status: 1
    };
    return this.httpClient.post(this.SERVER_URL + 'toggle', obj, this.httpOptions);
  }
  turnOff(id: string) {
    const obj = {
      id: id,
      status: 0
    };
    return this.httpClient.post(this.SERVER_URL + 'toggle', obj, this.httpOptions);
  }
}
