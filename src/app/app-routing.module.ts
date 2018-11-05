import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridListFormComponent } from './views/grid-list-form/grid-list-form.component';
import { GridsListComponent } from './views/grids-list/grids-list.component';

const routes: Routes = [
  { path:'', redirectTo:'gridList', pathMatch:'full' },
  { path:'gridlistform', component:GridListFormComponent },
  { path: 'gridList', component: GridsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
