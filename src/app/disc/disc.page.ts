import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database'

@Component({
  selector: 'app-tab1',
  templateUrl: 'disc.page.html',
  styleUrls: ['disc.page.scss']
})
export class DiscPage {

  constructor( public afDB: AngularFireDatabase) {}

  add(){
    this.afDB.list('User/').push({
      pseudo:'Noe Ken'
    })
  }

  

}
