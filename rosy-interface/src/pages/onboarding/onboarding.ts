import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DataService } from '../../shared/index';

@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html'
})
export class OnboardingPage {
    private loggingIn: boolean;
    private loggedIn: boolean;
    private emailSignup: boolean;
    private onboardingStep: number = 0;

    constructor(public navCtrl: NavController) {

    }

    gotoEmailSignup() {
        this.loggingIn = true;
        this.emailSignup = true;
    }
    
    signupByEmail(email: string, password: string) {
        this.loggedIn = true;
        this.nextOnboardingStep();
    }
    
    nextOnboardingStep() {
        this.onboardingStep++;
    }
}
