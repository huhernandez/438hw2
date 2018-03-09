import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AboutComponent} from './components/about/about.component';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ImageapiService} from './services/imageapi.service';
import {SquaddataService} from './services/squaddata.service';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {path: ' ', component: UserComponent},
  {path: 'about', component: AboutComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SquaddataService, ImageapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
