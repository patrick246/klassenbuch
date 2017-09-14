import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LehrerComponent} from "./lehrer/lehrer.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'lehrer',
    component: LehrerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
