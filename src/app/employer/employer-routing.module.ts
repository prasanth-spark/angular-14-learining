import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    { path: 'employer', redirectTo: 'employer/index', pathMatch: 'full'},
    { path: 'employer/index', component: IndexComponent },
    { path: 'employer/:employerId/view', component: ViewComponent },
    { path: 'employer/create', component: CreateComponent },
    { path: 'employer/:employerId/edit', component: EditComponent } 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
