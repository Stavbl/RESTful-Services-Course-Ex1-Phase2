import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { HomeComponent } from "app/home/home.component";
import { UserChannelsComponent } from "app/user-channels/user-channels.component";
import { AllChannelsComponent } from "app/all-channels/all-channels.component";

const appRoutes: Routes =[
    { path: 'getAllUsers', component: HomeComponent},
    { path: 'getUserChannels', component: UserChannelsComponent},
    { path: 'getAllChannels', component: AllChannelsComponent},
    { path:'**', redirectTo: 'getAllUsers'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}