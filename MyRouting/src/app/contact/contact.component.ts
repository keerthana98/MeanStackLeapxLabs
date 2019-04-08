import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  angForm:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.createForm();
    console.log(this.angForm);
  }

  createForm()
  {
    this.angForm=this.fb.group({
      name:['',Validators.required]

    });
  }
  ngOnInit() {
  }

}
