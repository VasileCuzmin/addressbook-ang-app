import { Guid } from "guid-typescript";

export interface IContact {
    Id: Guid,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string
}