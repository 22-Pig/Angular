import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dev } from './Dev';

import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

function idValidator(control: FormControl): { [s: string]: boolean } {
  if (control && control.value) {
    if (!String(control.value).match(/^[0-9]*$/)) {
      return { invalidId: true };
    }
  }
}

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})

export class DeviceComponent implements OnInit {

  devForm: FormGroup;
  id: AbstractControl;
  build: AbstractControl;
  floor: AbstractControl;
  type: AbstractControl;
  name: AbstractControl;
  value: AbstractControl;
  descr: AbstractControl;
  devs$: Observable<Dev>;
  baseUrl = 'http://127.0.0.1:8080/';
  currentDev: Dev;
  modalRef: BsModalRef;

  constructor(private fb: FormBuilder, private httpclient: HttpClient, private modalService: BsModalService) {
    this.devForm = this.fb.group({
      'id': ['', Validators.compose([Validators.required, idValidator])],
      'build': [''],
      'floor': [''],
      'type': [''],
      'name': [''],
      'value': [''],
      'descr': ['']
    });

    this.id = this.devForm.controls['id'];
    this.build = this.devForm.controls['build'];
    this.floor = this.devForm.controls['floor'];
    this.type = this.devForm.controls['type'];
    this.name = this.devForm.controls['name'];
    this.value = this.devForm.controls['value'];
    this.descr = this.devForm.controls['descr'];

  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  // 页面初始化
  ngOnInit(): void {
    this.devs$ = <Observable<Dev>>this.httpclient.get(this.baseUrl + 'searchAllDev');
  }

  search() {
    if (this.id.value) {
      console.log(typeof (this.id.value));
      this.devs$ = <Observable<Dev>>this.httpclient.get(this.baseUrl + 'searchDev/' + this.id.value);
    } else {
      this.devs$ = <Observable<Dev>>this.httpclient.get(this.baseUrl + 'searchAllDev');
    }
  }

  searchall() {
    if (this.id.value) {
      this.devs$ = <Observable<Dev>>this.httpclient.get(this.baseUrl + 'searchAllDev');
      // this.devForm.patchValue(null);
    }
  }

  add() {
    if (!this.id.value) {
      alert('ID号为空，不能添加!');
      return 0;
    } else {
      // 对于可观察对象执行，我们需要订阅其结果
      console.log(typeof (this.devForm.value));

      this.httpclient.post(this.baseUrl + 'addDev', this.devForm.value).subscribe(
        (val: any) => {
          if (val.succ) { // val是服务器返回的值
            alert('添加成功!');
            this.searchall();
          }
        }
      );
    }
  }

  select(u: Dev) {
    this.currentDev = u;
    console.log(this.currentDev);
    this.devForm.setValue(this.currentDev);
  }

  delete() {
    console.log(typeof (this.currentDev.id));
    let did = String(this.currentDev.id);
    this.httpclient.post(this.baseUrl + 'deleteDev', { did }).subscribe(
      (val: any) => {
        if (val.succ) {
          alert('删除成功!');
          this.searchall();
        }
      }
    )
  }

  update() {
    if (!this.currentDev) {
      alert('必须先选择设备!');
    } else {
      this.httpclient.post(this.baseUrl + 'updateDev', this.devForm.value).subscribe(
        (val: any) => {
          if (val.succ) {
            alert('修改成功!');
            this.searchall();
          }
        }
      )
    }
  }

}
