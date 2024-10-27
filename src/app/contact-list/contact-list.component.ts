import { Component } from '@angular/core';
import { IContact } from '../interfaces/IContact';
import { ContactsService } from '../services/contacts.service';
import { Guid } from 'guid-typescript';

@Component({
    selector: 'contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
    contacts: IContact[] = [];
    public page: number = 1;
    public pageSize: number = 10;
    public count: number = 0;

    public pageSizes: number[] = [10, 20, 30, 40];
    constructor(private contactsService: ContactsService) { }

    ngOnInit(): void {
        this.getContacts();
    }

    getContacts() {
        this.contactsService.getContacts(this.page, this.pageSize)
            .subscribe(
                response => {
                    this.contacts = response.values;
                    this.count = response.totalCount;
                    this.page = response.page;
                    this.pageSize = response.pageSize

                    console.log(response);
                },
                error => {
                    console.error(error)
                }
            );
    }

    public showContactDetails(id: Guid) {
        this.contactsService.getContactDetails(id);
    }

    onPageChange(page: number) {
        this.page = page
        this.getContacts();
    }

    onPageSizeChange(event: any) {
        this.pageSize = event.target.value;
        this.getContacts();
    }
}
