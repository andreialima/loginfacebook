import { Component } from '@angular/core';
import { FacebookService } from "../../providers/facebook-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userProfile: any;

  constructor( public facebook: FacebookService ) {  }

  fbLogin() {
    this.facebook.login().subscribe((connected)=>{   //We watch the observable to get connection status
      if(connected === true){
        this.facebook.getProfile().subscribe((profile)=>{   //If connected, we retrieve the profile
          this.userProfile = profile;
        }, (error)=>{console.log(error);});
      }
    }, (error)=>{console.log(error);});
  }

}
