import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardOwnerComponent } from './board-owner/board-owner.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BookCarComponent } from './book-car/book-car.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { BookingInformationComponent } from './booking-information/booking-information.component';
import { CarViewDetailsComponent } from './car-view-details/car-view-details.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ShowCarDetailsComponent } from './show-car-details/show-car-details.component';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { AuthService } from './_services/auth.service';
import { CarBookResolveService } from './_services/car-book-resolve.service';
import { CarResolveService } from './_services/car-resolve.service';


const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'user', component: BoardUserComponent },
{ path: 'owner', component: BoardOwnerComponent },
{ path: 'admin', component: BoardAdminComponent },
{
  path: 'addcar', component: AddNewCarComponent,
  resolve: {
    car: CarResolveService
  }
},
{ path: 'showcar', component: ShowCarDetailsComponent },

{ path: '', redirectTo: 'home', pathMatch: 'full' },
{
  path: 'bookingInformation', data: { roles: ['ADMIN'] },
  component: BookingInformationComponent
},
{
  path: 'carView', component: CarViewDetailsComponent, resolve: {
    car: CarResolveService
  }
},
{
  path: 'bookCar', data: { roles: ['USER'] }, component: BookCarComponent,
  resolve: {
    carDetails: CarBookResolveService
  }
},
{
  path: 'cart', data: { roles: ['USER'] }, component: CartComponent
},
{
  path: 'myBooking', data: { roles: ['USER'] }, component: MyBookingComponent
},
{
  path: 'bookingConfirm', data: { roles: ['USER'] },
  component: BookingConfirmationComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
