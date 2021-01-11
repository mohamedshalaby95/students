import { MyserviceService } from './myservice.service';
import {HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalaryComponent } from './galary/galary.component';
import { ErrorComponent } from './error/error.component';
import { CustomepipePipe } from './pipes/customepipe.pipe';
import { CustomDirective } from './directive/custom.directive';
const routes:Routes=[
  {path:"",redirectTo:'Home',pathMatch:'full'},
  {path:"Home",component:HomeComponent},
  {path:"About/:id",component:AboutComponent},
  {path:"Galary",component:GalaryComponent},
  {path:"**",component:ErrorComponent},
  

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalaryComponent,
    ErrorComponent,
    CustomepipePipe,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),HttpClientModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
