import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Record } from './Record';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  records$: Observable<Record>;
  baseUrl = 'http://127.0.0.1:8080/';

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.records$ = <Observable<Record>>this.httpclient.get(this.baseUrl + 'searchAllRecord');
  }

}
