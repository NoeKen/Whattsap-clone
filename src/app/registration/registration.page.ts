import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  nom: string;
  photo : any;

  constructor(
    public authService: AuthentificationService,
    public router: Router,
    public afAuth : AngularFireAuth
  ) { }

  ngOnInit() {
  }

  signUp(email, password,displayName){
    this.authService.RegisterUser(email.value, password.value,displayName.value)
    .then((res) => {
      this.authService.SendVerificationMail();
      this.router.navigate(['verify-email']);
    }).catch((error) => {
      window.alert(error.message);
    })
}

}
