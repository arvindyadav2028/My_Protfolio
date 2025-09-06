import { Component , OnInit, AfterViewInit, ElementRef} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit  {
  
  
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    
  }




//chat bot code added here 

isChabot:boolean = false;

toggleChatBot(){
  this.isChabot = !this.isChabot;
}


}
