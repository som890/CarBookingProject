import { Component, OnInit } from '@angular/core';
import { CarService } from '../_services/car.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['Tên', 'Biển số', 'Description','Giá'];

  carDetails: any[]= [];

  constructor( private carService: CarService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails() {
    this.carService.getCartDetails().subscribe(
      (respone: any) =>
      {
        console.log(respone);
        this.carDetails = respone;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
