import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-cheese-detail',
  templateUrl: './cheese-detail.component.html',
  styleUrls: ['./cheese-detail.component.css']
})
export class CheeseDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CheeseDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  close(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
