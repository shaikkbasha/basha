import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './users/login/login.component';
import { ListComponent } from './lists/list/list.component';
import { FormComponent } from './lists/form/form.component';
import { ListServiceService } from './list-service.service';
import { UserServiceService } from './user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AutzGuard } from './shared/autz.guard';
import { SecurityGuard } from './shared/security.guard';
import {FormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ListComponent,
    FormComponent,
    LogoutComponent,
    NavbarComponent
    

  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,HttpClientModule,FormsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
  ],
  providers: [ListServiceService,UserServiceService,AutzGuard,SecurityGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
