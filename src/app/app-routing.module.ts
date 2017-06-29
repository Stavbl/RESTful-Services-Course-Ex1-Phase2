import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { HomeComponent } from "app/home/home.component";
import { UserChannelsComponent } from "app/user-channels/user-channels.component";
import { AllChannelsComponent } from "app/all-channels/all-channels.component";

const appRoutes: Routes =[
    { path: '', component: HomeComponent, pathMatch:'full'},
    { path: 'getUserChannels', component: UserChannelsComponent},
    { path: 'getAllChannels', component: AllChannelsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}