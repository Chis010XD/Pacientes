import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CrudComponent } from './HOSPITAL/crud/crud.component';
import { FormComponent } from './HOSPITAL/form/form.component';

const routes: Routes=[
  {path:'',redirectTo:'/crud', pathMatch:'full'},
  {path:'crud',component:CrudComponent},
  {path:'crud/form',component:FormComponent},
  {path:'crud/form/:id',component:FormComponent}

]

@NgModule({
  imports: [
        RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
