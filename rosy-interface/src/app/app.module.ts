import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HealthPage } from '../pages/health/health';
import { CyclePage } from '../pages/cycle/cycle';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ResourcesPage } from '../pages/resources/resources';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { ProfilePage } from '../pages/profile/profile';
import { NewsPage } from '../pages/news/news';

@NgModule({
  declarations: [
    MyApp,
    HealthPage,
    CyclePage,
    HomePage,
    TabsPage,
    ProfilePage,
    ResourcesPage,
    OnboardingPage,
    NewsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HealthPage,
    CyclePage,
    HomePage,
    TabsPage,
    ProfilePage,
    ResourcesPage,
    OnboardingPage,
    NewsPage
  ],
  providers: []
})
export class AppModule {}
