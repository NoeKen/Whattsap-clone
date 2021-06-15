import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { PopoverController } from '@ionic/angular';
import { AuthentificationService } from '../services/authentification.service';
import { ThemeComponent } from '../themes/theme.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'params.page.html',
  styleUrls: ['params.page.scss']
})
export class ParamsPage {
  connected = false;
  userId  : any;
  nom : string;
//================================================================
colorThemes: Array<any> = [
  {
  name: "Dark",
  color: "#000000"
  }, {
  name: "light",
  color: "#ffffff"
  }, {
  name: "Blue",
  color: "#3490eb"
  },{
  name: "ping",
  color: "#eb445a"
  }
];
 
  setTheme(color) {
    if (color == "#ffffff") {
      document.documentElement.style.setProperty("--ion-color-primary", '#02122bfa');
    } else {
      document.documentElement.style.setProperty("--ion-color-primary", color);
      document.documentElement.style.setProperty("--ion-toolbar-background", color);
    }
  }
  //======================================================================================
  constructor(
    public authService: AuthentificationService,
    public afAuth : AngularFireAuth,
    public popoverCtrl: PopoverController) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('Non connecté');
      } else {
        
        this.connected=true;
        this.userId = auth.uid;
        this.nom = auth.displayName;
        console.log('utilisateur connecté : ' + auth.uid + 'email : ' + auth.email);
      } 
    });
  }

  themesChanges(event){
    console.log(event.detail.checked);
    if (event.detail.checked) {
        document.documentElement.style.setProperty("--ion-background-color",'#02122bfa');
        document.documentElement.style.setProperty("--ion-text-color", '#ffffff');
      }else{
        document.documentElement.style.setProperty("--ion-background-color",'#121212');
        document.documentElement.style.setProperty("--ion-text-color", '#ffffff');
      }
      console.log('dark mode')
    } 

  logOut(){
    this.authService.SignOut();
    this.connected = false; 
  }
}
