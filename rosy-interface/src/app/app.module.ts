import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HealthPage } from '../pages/health/health';
import { CyclePage } from '../pages/cycle/cycle';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OnboardingPage } from '../pages/onboarding/onboarding';

@NgModule({
  declarations: [
    MyApp,
    HealthPage,
    CyclePage,
    HomePage,
    TabsPage,
    OnboardingPage
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
    OnboardingPage
  ],
  providers: []
})
export class AppModule {}
