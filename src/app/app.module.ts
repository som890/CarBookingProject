import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardOwnerComponent } from './board-owner/board-owner.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { ShowCarDetailsComponent } from './show-car-details/show-car-details.component';
import {MatTableModule} from '@angular/material/table';
import { ShowCarImagesDialogComponent } from './show-car-images-dialog/show-car-images-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CarViewDetailsComponent } from './car-view-details/car-view-details.component';
import { BookCarComponent } from './book-car/book-car.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { MatDialogRef } from '@angular/material/dialog';
import { CartComponent } from './cart/cart.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { BookingInformationComponent } from './booking-information/booking-information.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardOwnerComponent,
    AddNewCarComponent,
    ShowCarDetailsComponent,
    ShowCarImagesDialogComponent,
    CarViewDetailsComponent,
    BookCarComponent,
    BookingConfirmationComponent,
    CartComponent,
    MyBookingComponent,
    BookingInformationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatDatepickerModule,
   // MatDialogRef
    

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
