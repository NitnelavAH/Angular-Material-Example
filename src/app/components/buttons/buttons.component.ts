import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor( private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialogService.confirmDialog({
      title: "Are you sure?",
      message: "Are yo sure you want to do this?",
      confirmText: 'Yes',
      cancelText: 'No'
    }).subscribe( res => {
      if(res){
        console.log('Presionaste Si', res);
      } else {
        console.log('Presionaste no', res);
      }
    });

    
  }



}
