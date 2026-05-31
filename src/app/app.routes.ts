import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard'
import { Setting } from './dashboard/setting/setting';
import { Profile } from './dashboard/profile/profile';
export const routes: Routes = [
    {
        path: 'dashboard', component: Dashboard, children: [
            { path: 'setting', component: Setting },
            { path: 'profile', component: Profile }
        ]
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }


];
