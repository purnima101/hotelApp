import { Component, OnInit } from '@angular/core';
import { Room } from './interface';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  name="Purnima"

  room:Room={
      availableRooms:10,
      bookedRooms:5
  };
  constructor() { }

  ngOnInit(): void {
  }

  roomAva=false;

  toggle()
  {
    this.roomAva=!this.roomAva
  }

}
