import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css'],
})
export class BookingConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialogRef<BookingConfirmationComponent>,
    private snack: MatSnackBar) { }

  closeDialog() {
    this.dialog.close();
  }

  ngOnInit(): void {
  }

}
