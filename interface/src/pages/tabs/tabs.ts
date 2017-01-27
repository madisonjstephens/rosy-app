import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { HealthPage } from '../health/health';
import { CyclePage } from '../cycle/cycle';
import { ProfilePage } from '../profile/profile';
import { ResourcesPage } from '../resources/resources';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tabs: any[] = [
        {
            text: 'my list',
            component: HomePage,
            icon: 'chk',
        },
        {
            text: 'health',
            component: HealthPage,
            icon: 'chr',
        },
        {
            text: 'cycle',
            component: CyclePage,
            icon: 'cal',
        },
        {
            text: 'resources',
            component: ResourcesPage,
            icon: 'bk',
        },
        {
            text: 'profile',
            component: ProfilePage,
            icon: 'alienhead',
        }
    ];
}
