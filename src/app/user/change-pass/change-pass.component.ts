import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss'],
})
export class ChangePassComponent implements OnInit {
  constructor(private UserService: UserService) {}

  userName: any;
  password: any = '';
  password2: any = '';
  wrongPass: boolean = false;
  truePass: boolean = false;

  ngOnInit(): void {
    this.userName = localStorage.getItem('username');
  }

  xulyDN(dataForm: any) {
    let id: any = localStorage.getItem('userid');
    this.UserService.getOne(id).subscribe((data: any) => {
      data = {
        ...data,
        password: dataForm.password,
      };
      this.UserService.editItem(data);
      alert('Đổi mật khẩu thành công');
    });
  }

  checkPass() {
    if (
      this.password != '' &&
      this.password2 != '' &&
      this.password == this.password2
    ) {
      this.wrongPass = false;
      this.truePass = true;
    } else this.wrongPass = true;
  }
}
