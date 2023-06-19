import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { TopComponent } from './components/top/top.component';
import { MainAnnouncementComponent } from './components/main-announcement/main-announcement.component';
import { FrecuentAsksComponent } from './components/frecuent-asks/frecuent-asks.component';
import { BestOfertComponent } from './components/best-ofert/best-ofert.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { TimeclockService } from './services/timeclock.service';
import { MovileAnimationComponent } from './components/movile-animation/movile-animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '@domo/domo-commons-lib';
import { UsermainComponent } from './pages/user/usermain/usermain.component';
import { BrokermainComponent } from './pages/broker/brokermain/brokermain.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopComponent,
    MainAnnouncementComponent,
    FrecuentAsksComponent,
    BestOfertComponent,
    TextBoxComponent,
    MovileAnimationComponent,
    UsermainComponent,
    BrokermainComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    TimeclockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
