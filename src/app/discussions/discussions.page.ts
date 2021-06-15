import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.page.html',
  styleUrls: ['./discussions.page.scss'],
})
export class DiscussionsPage implements OnInit {
  
  connected = false;
  messageText:any;
  userId: any;
  messages = [];
  null = false;

  constructor(
    public afDB:AngularFireDatabase,
    public afAuth:AngularFireAuth,
    public alertController: AlertController,
    public toastController: ToastController) { 
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('Non connecté');
      } else {
        this.userId = auth.uid;
        this.getMessages();
      } 
    });
  }

  ngOnInit() {
  }

  sendMessage() {
    if(this.messageText !== ''){
      this.afDB.list('Messages/Evoyé').push({
        userId: this.userId,
        text: this.messageText,
        date: new Date().toISOString()
      });
      console.log(this.messageText )
      this.messageText = '';
    }else{
      this.presentToast();
    }
   
  }
  
  getMessages(){
    this.afDB.list('Messages/Evoyé').snapshotChanges(['child_added']).subscribe(actions =>{
      this.messages = [];
      actions.forEach(action =>{
        console.log('MessagesText:' +action.payload.exportVal().text + 'dates'+ action.payload.exportVal().date);
        this.messages.push({
          text: action.payload.exportVal().text,
          userId : action.payload.exportVal().userId,
          date : action.payload.exportVal().date,
        })
      })
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Le champ ne peut etre vide',
      duration: 1000
    });
    toast.present();
  }


}
