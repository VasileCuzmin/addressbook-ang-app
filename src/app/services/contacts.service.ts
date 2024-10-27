import { Injectable } from '@angular/core';
import { IContact } from '../interfaces/IContact';
import { Guid } from "guid-typescript";
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageResult } from '../pagination/PageResult';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = 'https://localhost:7046/api';
  }
  public getContactDetails(id: Guid) {
    return this.http.get<IContact>((`${this.apiURL}/Contacts/${id}`));
  }

  getContacts(page: number, pageSize: number): Observable<PageResult<IContact>> {
    return this.http.get<PageResult<IContact>>(`${this.apiURL}/Contacts?Page=${page}&PageSize=${pageSize}`);
  }

  // getContactDetails(id: Guid): IContact[] {
  //   return this.contacts.filter(c => c.Id === id);
  // }
}
