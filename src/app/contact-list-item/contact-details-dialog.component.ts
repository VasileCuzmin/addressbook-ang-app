import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IContact } from '../interfaces/IContact';

@Component({
  selector: 'contact-details-dialog',
  template: `
    <h2 mat-dialog-title class="text-blue-700">
      {{ data | contactFullName }}
    </h2>
    <mat-dialog-content>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-gray-100 p-4 rounded-md">
          <p>First Name</p>
          <span class="font-bold text-lg">{{ data.firstName }}</span>
        </div>

        <div class="bg-gray-100 p-4 rounded-md">
          <p>Last Name</p>
          <span class="font-bold text-lg">{{ data.lastName }}</span>
        </div>

        <div class="bg-gray-100 p-4 rounded-md">
          <p>Email</p>
          <span class="font-bold text-lg">{{ data.emailAddress }}</span>
        </div>

        <div class="bg-gray-100 p-4 rounded-md">
          <p>Birth date</p>
          <span class="font-bold text-lg">{{ data.phoneNumber }}</span>
        </div>
      </div>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ContactDetailsDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IContact) { }

  ngOnInit(): void { }
}
