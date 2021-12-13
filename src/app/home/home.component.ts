import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name='HUY';
  public age=19;
  public fruit=["Táo","Nho"];
  public fruit2=[
    {ten:'Táo',gia:12, haGia:true},
    {ten:'Nho',gia:-18,haGia:false},
    {ten:'Cam',gia:20,haGia:false}
  ];
  constructor() { }
  public ngOnInit(): void {
    console.log("Trái cây= ",this.fruit);
  }
  public resetName():void{
    console.log("resetName");
    this.name='';
  }

}
