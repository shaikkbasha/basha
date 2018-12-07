import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './users/login/login.component';
import { FormComponent } from './lists/form/form.component';
import { ListComponent } from './lists/list/list.component';
import { LogoutComponent } from './logout/logout.component';
import { SecurityGuard } from './shared/security.guard';

const routes: Routes = [{path:"home",component:HomeComponent},{path:"about",component:AboutComponent},{path:"contact",component:ContactComponent},
{path:"login",component:LoginComponent},{path:"update/:id",component:FormComponent},
{path:"delete/:id",component:FormComponent},{path:"logout",component:LogoutComponent},{path:"form",component:FormComponent},{path:"list",component:ListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
