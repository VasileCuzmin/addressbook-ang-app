import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';

describe('EmployeeListComponent', () => {
    let component: ContactListComponent;
    let fixture: ComponentFixture<ContactListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContactListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
