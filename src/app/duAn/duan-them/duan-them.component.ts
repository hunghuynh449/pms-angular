import { Component, OnInit } from '@angular/core';
import { Leader } from 'src/app/leader';
import { NhanVien } from 'src/app/nhan-vien';
import { DuAnService } from 'src/app/service/du-an.service';
import { LeaderService } from 'src/app/service/leader.service';
import { NhanVienService } from 'src/app/service/nhan-vien.service';

@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.scss'],
})
export class DuanThemComponent implements OnInit {
  projectName: any;
  projectDate: any;
  projectPrice: any;
  projectLeader: any;
  projectMember: any;
  constructor(
    private LeaderService: LeaderService,
    private NhanVienService: NhanVienService,
    private DuAnService: DuAnService
  ) {}

  listLeader: Leader[] = [];
  listNhanVien: NhanVien[] = [];

  ngOnInit(): void {
    this.listLeader = this.LeaderService.getAll();
    this.listNhanVien = this.NhanVienService.getAll();
  }

  xuly(data: any) {
    console.log('Data: ', data);
    let allProject = this.DuAnService.getAll();
    data = {
      id: allProject[allProject.length - 1].id + 1,
      tenDuAn: this.projectName,
      tien: this.projectPrice,
      leader: this.projectLeader,
      thanhvien: this.projectMember,
    };
    this.DuAnService.addItem(data);
    // console.log('projectName=', this.projectName);
    // console.log('projectDate=', this.projectDate);
    // console.log('projectPrice=', this.projectPrice);
    // console.log('projectLeader=', this.projectLeader);
    // console.log('projectMember=', this.projectMember);
  }
}
