import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { Check } from './Check';
import { AbstractControl } from '@angular/forms';
import { InfoService } from '../../../services/info.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {

  isLoading = false;
  led$ = null;
  door$ = null;
  sprinkler$ = null;
  fan$ = null;
  window$ = null;
  mot$ = null;

  build: AbstractControl;
  floor: AbstractControl;
  sex: AbstractControl;
  type: AbstractControl;
  id: AbstractControl;
  value: AbstractControl;
  option: AbstractControl;
  checks$: Observable<Check>;
  baseUrl = 'http://127.0.0.1:8080/';
  currentUser: Check;
  allInfos: Check[] = null;

  iconsON = new Map([
    ['Humd', '/assets/img/湿度计.svg'],
    ['Temp', '/assets/img/温度计.svg'],
    ['led', '/assets/img/led1.png'],
    ['fan', '/assets/img/fan1.png'],
    ['NH3', '/assets/img/nh3.png'],
    ['H2S', '/assets/img/h2s.png'],
    ['mot', '/assets/img/mot1.png'],
    ['door', '/assets/img/door1.png'],
    ['sprinkler', '/assets/img/sprinkler1.png'],
    ['Smoke', '/assets/img/一氧化碳报警器.svg'],
    ['window', '/assets/img/window1.png'],
    ['flush', '/assets/img/flush1.png'],
  ]);

  iconsOFF = new Map([
    ['led', '/assets/img/led0.png'],
    ['fan', '/assets/img/fan0.png'],
    ['mot', '/assets/img/mot0.png'],
    ['door', '/assets/img/door0.png'],
    ['sprinkler', '/assets/img/sprinkler0.png'],
    ['window', '/assets/img/window0.png'],
    ['flush', '/assets/img/flush0.png'],
  ]);

  constructor(private infoService: InfoService, private httpclient: HttpClient) {

  }
  // 页面初始化
  ngOnInit(): void {
    this.checks$ = <Observable<Check>>this.infoService.getINFOS();
    this.checks$.subscribe(
      (infos: any) => {
        this.allInfos = infos;
        console.log(this.allInfos);
      }
    );

  }

  deviceIcon(type: string, value: string): string {
    if (type && value == '0') {
      return this.iconsOFF.get(type);
    }
    else if (type && value == '1') {
      return this.iconsON.get(type);
    }
    return '/assets/img/报错.svg';
  }

}
