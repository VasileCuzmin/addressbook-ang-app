import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts = [
    { Id: 1, firstName: 'John', lastName: 'Smith', address: '111 Main St', phoneNumber: '111-1111-1111' },
    { Id: 1, firstName: 'Jane', lastName: 'Smith', address: '111 Main St', phoneNumber: '111-555-1111' },
    { Id: 1, firstName: 'Mary', lastName: 'Smith', address: '111 Main St', phoneNumber: '111-1111-55553' },
    { Id: 1, firstName: 'Jack', lastName: 'Smith', address: '111 Main St', phoneNumber: '455-1111-1111' }

  ]

  constructor() { }

  getContacts() {
    return this.contacts;
  }
}
