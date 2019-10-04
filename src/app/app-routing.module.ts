import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstTsComponent } from './first-ts/first-ts.component';
import { SoLieuComponent } from './so-lieu/so-lieu.component';
import { TestCssComponent } from './test-css/test-css.component';

const routes: Routes = [
  { path: '', component: FirstTsComponent },
  { path: 'firstApp', component: FirstTsComponent },
  { path: 'solieu/:id', component: SoLieuComponent },
  { path: 'testcss', component: TestCssComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
