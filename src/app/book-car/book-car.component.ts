import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../_model/booking.model';
import { Car } from '../_model/car.model';
import { CarService } from '../_services/car.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.css']
})
export class BookCarComponent implements OnInit {
 
  carDetails: Car[] = [];
  showUserBoard = false;
  isLoggedIn = false;
  username?: string;

  bookingDetails: Booking = {
    fullName: '',
    fullAddress: '',
    contactNumber: '',
    startDate: new Date(),
    endDate: new Date(),
    carBookingQuantities: []
  }
  
  constructor(private activatedRoute: ActivatedRoute,private carService: CarService, 
              private router: Router,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.carDetails =this.activatedRoute.snapshot.data['carDetails']

    this.carDetails.forEach(
      x => this.bookingDetails.carBookingQuantities.push(
        {id: x.id, quantity: 1}
      )
    )
    console.log(this.carDetails);
    console.log(this.bookingDetails);
  }

  bookCar(bookForm:NgForm) {
    this.carService.doBooking(this.bookingDetails).subscribe(
      (resp) => {
        console.log(resp);
        bookForm.reset();
       // this.router.navigate(['/bookingConfirm']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getQuantityForCar(id: any) {
    const filteredCar = this.bookingDetails.carBookingQuantities.filter(
      (carQuantity) => carQuantity.id = id
    );
    return filteredCar[0].quantity;
  }
  getCaculatedTotal(id: any, dailyRentalPrice:any) {
    const filteredCar = this.bookingDetails.carBookingQuantities.filter(
      (carQuantity) => carQuantity.id = id
    )
    return filteredCar[0].quantity*dailyRentalPrice;
  }
  onQuantityChanged(quantity: any, id: any) {
    const filteredCar = this.bookingDetails.carBookingQuantities.filter(
      (carQuantity) => carQuantity.id = id
    )[0].quantity = quantity
  }
}
