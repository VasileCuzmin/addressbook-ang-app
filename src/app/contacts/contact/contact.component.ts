import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  allContacts: any
  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.allContacts = this.contactsService.getContacts();
    console.log(this.allContacts);
  }

}
