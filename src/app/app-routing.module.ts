import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaoveGuard } from './baove.guard';
import { DuanChiTietComponent } from './duAn/duan-chi-tiet/duan-chi-tiet.component';
import { DuanListComponent } from './duAn/duan-list/duan-list.component';
import { DuanSuaComponent } from './duAn/duan-sua/duan-sua.component';
import { DuanThemComponent } from './duAn/duan-them/duan-them.component';
import { NvListComponent } from './nhanVien/nv-list/nv-list.component';
import { NvSuaComponent } from './nhanVien/nv-sua/nv-sua.component';
import { NvThemComponent } from './nhanVien/nv-them/nv-them.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskSuaComponent } from './task/task-sua/task-sua.component';
import { TaskThemComponent } from './task/task-them/task-them.component';
import { ChangePassComponent } from './user/change-pass/change-pass.component';
import { ForgotPassComponent } from './user/forgot-pass/forgot-pass.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  { path: 'duanList', component: DuanListComponent, canActivate: [BaoveGuard] },
  { path: 'duanThem', component: DuanThemComponent, canActivate: [BaoveGuard] },
  {
    path: 'duanSua/:id',
    component: DuanSuaComponent,
    canActivate: [BaoveGuard],
  },
  {
    path: 'duan/:id',
    component: DuanChiTietComponent,
    canActivate: [BaoveGuard],
  },
  { path: 'taskList', component: TaskListComponent, canActivate: [BaoveGuard] },
  { path: 'taskThem', component: TaskThemComponent, canActivate: [BaoveGuard] },
  {
    path: 'taskSua/:id',
    component: TaskSuaComponent,
    canActivate: [BaoveGuard],
  },
  { path: 'nvList', component: NvListComponent, canActivate: [BaoveGuard] },
  { path: 'nvThem', component: NvThemComponent, canActivate: [BaoveGuard] },
  { path: 'nvSua/:id', component: NvSuaComponent, canActivate: [BaoveGuard] },
  { path: 'dangNhap', component: LoginComponent },
  { path: 'dangKy', component: RegisterComponent },
  { path: 'quenMatKhau', component: ForgotPassComponent },
  {
    path: 'doiMatKhau',
    component: ChangePassComponent,
    canActivate: [BaoveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
