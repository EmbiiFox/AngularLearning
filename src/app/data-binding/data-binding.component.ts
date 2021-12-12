import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  title='Data Binding';
  fullName='Nairubi';
  age=18;
  isMarried=false;

  user={
    username: 'Cam Tu',
    email: 'camtu.nguyenthi@gmail.com',
    role:true,
  }
  imgSrc='https://upload.wikimedia.org/wikipedia/vi/thumb/e/e0/Iron_Man_bleeding_edge.jpg/250px-Iron_Man_bleeding_edge.jpg';
  isDisabled=true;
  email="";
  clickMe(){
    alert('Clicked!')
  }
  getEmail(event: any){
    console.log(event.tartget.value)
  }
  constructor() { }
  ngOnInit(): void {
  }

}
