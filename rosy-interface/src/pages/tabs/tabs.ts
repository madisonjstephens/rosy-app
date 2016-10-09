import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { HealthPage } from '../health/health';
import { CyclePage } from '../cycle/cycle';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    private tabs: any[] = [
        {
            text: 'my list',
            component: HomePage,
            icon: '',
        },
        {
            text: 'health',
            component: HealthPage,
            icon: '',
        },
        {
            text: 'cycle',
            component: CyclePage,
            icon: '',
        },
        {
            text: 'resources',
            component: ProfilePage,
            icon: '',
        },
        {
            text: 'profile',
            component: ProfilePage,
            icon: '',
        }
    ];
}
