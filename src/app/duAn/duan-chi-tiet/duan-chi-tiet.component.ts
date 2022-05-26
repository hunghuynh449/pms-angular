import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DuAn } from 'src/app/du-an';
import { NhanVien } from 'src/app/nhan-vien';
import { DuAnService } from 'src/app/service/du-an.service';
import { NhanVienService } from 'src/app/service/nhan-vien.service';

@Component({
  selector: 'app-duan-chi-tiet',
  templateUrl: './duan-chi-tiet.component.html',
  styleUrls: ['./duan-chi-tiet.component.scss'],
})
export class DuanChiTietComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private DuAnService: DuAnService,
    private NhanVienService: NhanVienService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  @Output() teamOut = new EventEmitter();

  idDuAn: number = Number(this.route.snapshot.params['id']);
  allDuAn: DuAn[] = [];
  duAn = <DuAn>{};

  listNv: NhanVien[] = [];
  totalSouth: number = 0;
  totalNorth: number = 0;
  totalCentral: number = 0;

  team: {
    memberSouth: NhanVien[];
    memberNorth: NhanVien[];
    memberCentral: NhanVien[];
  } = {
    memberSouth: [],
    memberNorth: [],
    memberCentral: [],
  };

  ngOnInit(): void {
    this.allDuAn = this.DuAnService.getAll();

    if (this.idDuAn < 0) return;

    let kq = this.DuAnService.getOne(this.idDuAn);
    if (kq == null) {
      this.duAn = {} as DuAn;
    } else {
      this.duAn = kq as DuAn;
      let data: any[] = this.duAn.thanhvien.map((item) =>
        this.NhanVienService.getOne(item)
      );
      this.listNv = data;

      //check member area
      this.listNv.forEach((item) => {
        if (item.khuvuc == 'Bắc') {
          this.team.memberNorth.push(item);
          this.totalNorth = this.totalNorth + 1;
        }
        if (item.khuvuc == 'Trung') {
          this.team.memberCentral.push(item);
          this.totalCentral = this.totalCentral + 1;
        }
        if (item.khuvuc == 'Nam') {
          this.team.memberSouth.push(item);
          this.totalSouth = this.totalSouth + 1;
        }
      });

      //pass data to parent component
      // this.ds.sendData(this.team);
      this.teamOut.emit(this.team);
    }
  }

  onChange(deviceValue: any) {
    this.router.navigate(['/duan', deviceValue.value]);
    this.idDuAn = deviceValue.value;
    console.log(this.team);
    // this.ds.sendData(this.team);
    this.teamOut.emit(this.team);

    return true;
  }
}
