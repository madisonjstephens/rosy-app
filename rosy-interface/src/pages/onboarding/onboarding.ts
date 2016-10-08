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
    private cycleStep = 0;
    private cycleStepBooleans: boolean[] = [ // I dunno some hacky stuff whatever
        false,
        false,
        false
    ]
    private goalImages: any[] = [
        {
            src: 'streamline.png',
            text: 'streamline routine',
            selected: false,
            width: '50px'
        },
        {
            src: 'exercise.png',
            text: 'exercise',
            selected: false,
            width: '50px'
        },
        {
            src: 'pregnancy.png',
            text: 'pregnancy',
            selected: false,
            width: '50px'
        },
        {
            src: 'stress.png',
            text: 'stress relief',
            selected: false,
            width: '50px'
        },
        {
            src: 'balance.png',
            text: 'balance',
            selected: false,
            width: '50px'
        },
        {
            src: 'health.png',
            text: 'health tracking',
            selected: false,
            width: '50px'
        },
        {
            src: 'nutrition.png',
            text: 'nutrition',
            selected: false,
            width: '50px'
        },
        {
            src: 'clarity.png',
            text: 'clarity',
            selected: false,
            width: '50px'
        }
    ]

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
    
    nextCycleStep() {
        this.cycleStep++;
        this.nextOnboardingStep();
    }
}
