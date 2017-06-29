import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Added imports
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UserChannelsComponent } from './user-channels/user-channels.component';
import { AllChannelsComponent } from './all-channels/all-channels.component';

import { UserService } from "app/services/user.service";
import { ChannelService } from "app/services/channel.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UserChannelsComponent,
    AllChannelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    UserService,
    ChannelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
