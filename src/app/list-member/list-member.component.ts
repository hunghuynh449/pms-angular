import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.scss'],
})
export class ListMemberComponent implements OnChanges {
  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  @Input() team: any;

  ngOnChanges($event: any): void {
    if ($event.team.firstChange) {
      this.team = {
        memberSouth: [{ ho: '', ten: '' }],
        memberCentral: [{ ho: '', ten: '' }],
        memberNorth: [{ ho: '', ten: '' }],
      };
    } else {
      console.log($event.team);
    }
  }
}
