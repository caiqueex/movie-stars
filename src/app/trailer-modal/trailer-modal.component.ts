import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'trailer-modal',
  templateUrl: './trailer-modal.component.html',
  styleUrls: ['./trailer-modal.component.scss']
})
export class TrailerModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    public dialogRef: MatDialogRef<TrailerModalComponent>,
  ) { }

}
