import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ContactListItemComponent } from './contact-list-item/contact-list-item.component';
import { ContactFulllNamePipe } from './contact-list-item/contact-full-name.pipe';
import { ContactDetailsDialogComponent } from './contact-list-item/contact-details-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'contacts', component: ContactListComponent },
// ]

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    HomeComponent,
    ContactListItemComponent,
    ContactFulllNamePipe,
    ContactDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
