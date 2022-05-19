import { Component, OnInit } from '@angular/core';
import { NhanVien } from 'src/app/nhan-vien';

@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.scss'],
})
export class NvListComponent implements OnInit {
  listNhanVien: NhanVien[] = [
    {
      id: 1,
      avt: 'https://hedieuhanh.com/wp-content/uploads/2019/08/anh-avatar-dep-doc-dao-nhat-3.jpg',
      ho: 'Nguyễn Bá',
      ten: 'Đạo',
      ngaysinh: '2001-1-3',
      phai: true,
      khuvuc: 'Bắc',
    },
    {
      id: 2,
      avt: 'https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-avatar-buc-minh-cuc-hai-huoc.jpg',
      ho: 'Phạm Kỳ',
      ten: 'Luật',
      ngaysinh: '2001-5-6',
      phai: true,
      khuvuc: 'Bắc',
    },
    {
      id: 3,
      avt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQME1Zo8tqVgGvaCiQQAuxKkdzJ0bJ8ygDqnV1_9SOA1BkEMK4n90svWIO7_pCMfSxc_m0&usqp=CAU',
      ho: 'Mai Thanh',
      ten: 'Toán',
      ngaysinh: '2002-6-15',
      phai: true,
      khuvuc: 'Nam',
    },
    {
      id: 4,
      avt: 'https://scr.vn/wp-content/uploads/2020/07/H%C3%ACnh-%C4%91%E1%BA%A1i-di%E1%BB%87n-%C4%91%E1%BA%B9p-1.jpg',
      ho: 'Cao Thị Chót',
      ten: 'Vót',
      ngaysinh: '2002-8-19',
      phai: false,
      khuvuc: 'Nam',
    },
    {
      id: 5,
      avt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUTzPmToeXINLPent4vxqBqEfSgO-k8adI9OkpmfR-2FEajD5tbBpMyHjVPnkQ_gnyeM&usqp=CAU',
      ho: 'Mai Phạt Sáu',
      ten: 'Ngàn',
      ngaysinh: '2001-2-28',
      phai: false,
      khuvuc: 'Trung',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
