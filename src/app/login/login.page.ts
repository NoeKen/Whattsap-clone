import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  alertController: any;

  constructor(
    public authService: AuthentificationService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['/tabs']);          
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        //this.presentAlert(error.message)
        window.alert(error.message)
      })
  }
/*
  async presentAlert(err:ErrorEvent) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: err,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }*/

}
