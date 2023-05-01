import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

showToast(msg: string, btnMsg = "Ok") {
  this.snackBar.open(msg, btnMsg, {
    verticalPosition: "bottom",
    horizontalPosition: "right",
    duration: 5000
  });
}

}
