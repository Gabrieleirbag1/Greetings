import { Routes } from '@angular/router';
import { GreetingListComponent } from './greeting-list/greeting-list.component';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { SingleGreetingComponent } from './singlegreeting/singlegreeting.component';
import { NewGreetingComponent } from './greeting-new/greeting-new.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'greetings', component: GreetingListComponent },
    { path: 'greetings/:id', component: SingleGreetingComponent },
    { path: 'new-greeting', component: NewGreetingComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];