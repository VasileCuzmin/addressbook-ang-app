import { IContact } from '../interfaces/IContact';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactFullName',
})
export class ContactFulllNamePipe implements PipeTransform {
  transform(contact: IContact): string {
    return `${contact.firstName} ${contact.lastName}`;
  }
}
