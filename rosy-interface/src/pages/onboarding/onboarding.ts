import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html'
})
export class OnboardingPage {
    private loggingIn: boolean;
    private emailSignup: boolean;

    constructor(public navCtrl: NavController) {

    }

    signupByEmail() {
        this.loggingIn = true;
        this.emailSignup = true;
    }
}
