import { Component, Input, OnInit } from '@angular/core';
import { IContact } from '../interfaces/IContact';
import { MatDialog } from '@angular/material/dialog';
import { ContactDetailsDialogComponent } from './contact-details-dialog.component';

@Component({
  selector: 'contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css'],
  host: {
    '(click)': 'showDetails()',
  },
})
export class ContactListItemComponent implements OnInit {

  @Input() contact!: IContact;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  showDetails() {
    this.dialog.open(ContactDetailsDialogComponent, {
      data: this.contact,
      minWidth: '480px',
    });
  }

}
