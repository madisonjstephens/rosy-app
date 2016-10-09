import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DataService } from '../../shared/index';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html'
})
export class OnboardingPage {
    loggingIn: boolean;
    loggedIn: boolean;
    emailSignup: boolean;
    onboardingStep: number = 0;
    cycleStep = 0;
    cycleStepBooleans: boolean[] = [ // I dunno some hacky stuff whatever
        false,
        false,
        false
    ]
    goalImages: any[] = [
        {
            src: 'streamline.png',
            text: 'streamline routine',
            selected: false,
            width: 50
        },
        {
            src: 'health.png',
            text: 'health tracking',
            selected: false,
            width: 37
        },
        {
            src: 'stress.png',
            text: 'stress relief',
            selected: false,
            width: 36
        },
        {
            src: 'exercise.png',
            text: 'exercise',
            selected: false,
            width: 51
        },
        {
            src: 'nutrition.png',
            text: 'nutrition',
            selected: false,
            width: 37
        },
        {
            src: 'balance.png',
            text: 'balance',
            selected: false,
            width: 36
        },
        {
            src: 'pregnancy.png',
            text: 'pregnancy',
            selected: false,
            width: 19
        },
        {
            src: 'clarity.png',
            text: 'clarity',
            selected: false,
            width: 36
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
        if (this.onboardingStep > 5) {
            this.navCtrl.push(TabsPage);
        }
    }
    
    nextCycleStep() {
        this.cycleStep++;
        this.nextOnboardingStep();
    }
    
    highlight(image: any) {
        image.selected = !image.selected;
    }
}
