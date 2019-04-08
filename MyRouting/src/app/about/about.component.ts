import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
people:any[]=[
  {
    name:'RON WEASLEY',
    age: 24
  },
  {
    name:'HERMOINE GRANGER',
    age: 23
  },
  {
    name:'HARRY POTTER',
    age: 25
  },
  {
    name:'LUNA',
    age: 26
  },
  {
    name:'TOM RIDDLE',
    age: 29
  },
  {
    name:'TESSA',
    age: 30
  }
];
  ngOnInit() {
  }

}
