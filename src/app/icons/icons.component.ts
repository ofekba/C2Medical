import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  name: string = '';
  civils_num: Number=-1;
  eventSum_val: string = '';
  soldiers_num: Number=-1;
  part_num: Number=-1;
  osn_val: string = '';
  hour_val: string = '';
  date_val: string = '';
  description_val: string = '';
  landmark_val: string = '';
battalion_val: string = '';
area_val: string = '';
brigade_val: string = '';
selected_event_type: string = '';

  constructor() {

  }


  ngOnInit() {
  }

 

  subAddForm(){
  //   civils_num
  //   eventSum_val
  //   soldiers_num
  //   part_num
  //   osn_val
  //   hour_val
  //   date_val
  //   description_val
  //   landmark_val
  // battalion_val
  // area_val
  // brigade_val
  // selected_event_type
    console.log(this.civils_num, this.eventSum_val, this.soldiers_num, this.part_num, this.osn_val, this.hour_val, this.date_val, this.description_val, this.landmark_val, this.battalion_val, this.area_val, this.brigade_val, this.selected_event_type);

  }
}
