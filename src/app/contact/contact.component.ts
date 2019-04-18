import { Component, OnInit } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // rubric80
  // Used jQuery or Angular for data binding 
  public submitted;
  public messageSent;

  messageModel = new Message('', '', '');

  constructor() { }

  ngOnInit() {
  }

  // rubric60
  // The send button should create an alert based on the message
  // sent 
  checkForm(isValid) {

    this.submitted = true;
    if (isValid) {
      this.messageSent = true;
      console.log('form is valid');
    }
  }
}
