import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonComponent } from '../common.component';

@Component({
  selector: 'app-alter',
  templateUrl: './alter.component.html',
  styleUrls: ['./alter.component.scss']
})
export class AlterComponent implements OnInit {

  myForm: FormGroup;
  userName: AbstractControl;
  password: AbstractControl;

  alterName: string;

  baseUrl = 'http://127.0.0.1:8080/';

  constructor(private fb: FormBuilder, private router: Router, private httpclient: HttpClient, private com: CommonComponent) {
    this.myForm = this.fb.group(
      {
        'userName': [''],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
      }
    );

    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];


  }

  ngOnInit(): void {
    this.alterName = this.com.name
    console.log(this.alterName);
  }

  alter() {
    if (this.myForm.valid) {
      this.httpclient.post(this.baseUrl + 'alterUser', this.myForm.value).subscribe((val: any) => {
        console.log(val);
        if (val.succ == true) {
          alert('修改的密码后为：' + val.message[0]);
          this.router.navigate(['/login']);
        } else if (val.succ == false) {
          alert('密码修改失败!');
        }
      });
    }
  }
}
