import { Component, OnInit } from '@angular/core';
import { MyBooking } from '../_model/my-booking.model';
import { CarService } from '../_services/car.service';

@Component({
  selector: 'app-booking-information',
  templateUrl: './booking-information.component.html',
  styleUrls: ['./booking-information.component.css']
})
export class BookingInformationComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Car name', 'Name', 'Address','Contact','Status','Action'];
  
  dataSource: MyBooking[] = [];
  
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getAllBookingDetailsForAdmin();
  }

  getAllBookingDetailsForAdmin() {
    this.carService.getAllBookingDetailsForAdmin().subscribe(
      (resp) => {
        this.dataSource = resp;
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  markAsDelivered(id:any) {
    console.log(id);
    this.carService.markAsDeliverd(id).subscribe(
      (response) => {
        this.getAllBookingDetailsForAdmin();
        console.log(response);
      },
      (error) =>
      {
        console.log(error)
      }
    )
  }

}
