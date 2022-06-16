import { Component } from '@angular/core';
import { AuthService } from './service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ASM1';
  constructor(private auth: AuthService) {}
  team: any;

  dataTeam($event: any) {
    this.team = $event.team;
    // console.log(this.team);
  }

  daDangNhap() {
    return this.auth.daDangNhap();
  }

  thoat() {
    this.auth.thoat();
  }
}
