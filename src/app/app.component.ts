import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  intervalSub: any;
  ngOnInit() {
    // this.intervalSub=setInterval(() =>{
    //   console.log("hello from ngOnInit");
    // },1000);
  }
  getMin(a: number,b: number){
    a>b?b:a
  }
  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   if(this.intervalSub){
  //     clearInterval(this.intervalSub);
  //   }  
  // }

}
