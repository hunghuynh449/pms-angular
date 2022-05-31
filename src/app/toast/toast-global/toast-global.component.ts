import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'ngbd-toast-global',
  templateUrl: './toast-global.component.html',
})
export class ToastGlobalComponent implements OnInit {
  constructor(public toastService: ToastService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  showStandard() {
    this.toastService.show('I am a standard toast');
  }

  showSuccess() {
    this.toastService.show('I am a success toast', {
      classname: 'bg-success text-light',
      delay: 10000,
    });
  }
}
