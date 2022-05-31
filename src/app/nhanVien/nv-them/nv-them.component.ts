import { Component, OnInit } from '@angular/core';
import { NhanVienService } from 'src/app/service/nhan-vien.service';

@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.scss'],
})
export class NvThemComponent implements OnInit {
  constructor(private NhanVienService: NhanVienService) {}

  staffFirstName: any;
  staffAvatar: any;
  staffLastName: any;
  staffBirth: any;
  staffGender: any;
  staffArea: any;

  ngOnInit(): void {}

  xuly(data: any) {
    console.log(data);
    let allNhanVien = this.NhanVienService.getAll();
    data = {
      id: allNhanVien[allNhanVien.length - 1].id + 1,
      avt: this.staffAvatar,
      ho: this.staffFirstName,
      ten: this.staffLastName,
      ngaysinh: this.staffBirth,
      phai: this.staffGender === 'true' ? true : false,
      khuvuc: this.staffArea,
    };
    this.NhanVienService.addItem(data);
  }
}
