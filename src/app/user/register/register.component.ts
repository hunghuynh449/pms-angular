import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private UserService: UserService) {}

  ngOnInit(): void {}

  xulyDN(dataForm: any) {
    this.UserService.addItem(dataForm);
    alert('Đăng ký thành công');
  }
}
