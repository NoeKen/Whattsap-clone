import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whathmenu',
  templateUrl: './whathmenu.component.html',
  styleUrls: ['./whathmenu.component.scss'],
})
export class WhathmenuComponent implements OnInit {

  colorThemes: Array<any> = [
    {
    name: "Red",
    color: "#ce4e57"
    }, {
    name: "Green",
    color: "#41b05d"
    }, {
    name: "Yellow",
    color: "#d3ae40"
    }, {
    name: "Blue",
    color: "#3490eb"
    }, {
    name: "Pink",
    color: "#cd5f93"
    },
    {
    name: "Orange",
    color: "#d28036"
    }];
   
    setTheme(color) {
    document.documentElement.style.setProperty("--ion-color-primary", color);
    }
   

  constructor() { }

  ngOnInit() {
    
  }

}
