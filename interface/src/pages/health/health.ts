import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CameraPreview, CameraPreviewRect} from 'ionic-native';

@Component({
  selector: 'page-health',
  templateUrl: 'health.html'
})
export class HealthPage {
    dropdowns: any[] = [
        {
            title: 'mood',
        },
        {
            title: 'body',
        },
        {
            title: 'skin',
        },
        {
            title: 'mind',
        },
        {
            title: 'activity',
        }
    ]

    constructor(public navCtrl: NavController) {

    }
    
    ngOnInit() {
        try {
            CameraPreview.setOnPictureTakenHandler().subscribe((result) => {
                console.log(result);
            });
        } catch (e) {
            console.log(e);
        }
    }
   
    get todayDate() {
        let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        
        let today = new Date();
        let day = days[today.getDay()];
        let month = months[today.getMonth()];
        let date = today.getDate();
        return day + ', ' + month + ' ' + date + this.dateSuffix(date);
    }
    
    dateSuffix(date: number) {
        if (date == 1 || date == 21 || date == 31) {
            return 'st';
        } else if (date == 2 || date == 22) {
            return 'nd';
        } else if (date == 3 || date == 23) {
            return 'rd';
        } else {
            return 'th';
        }
    }
    
    openCamera() {
        let cameraRect: CameraPreviewRect = {
            x: 100,
            y: 100,
            width: 200,
            height: 200
        };
        
        CameraPreview.startCamera(
            cameraRect,
            'front',
            true,
            false,
            true,
            1
        );
    }
    
    closeCamera() {
        CameraPreview.stopCamera();
    }
    
    takePicture() {
        CameraPreview.takePicture({
            maxWidth: 640,
            maxHeight: 640
        });
    }
}
