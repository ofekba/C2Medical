import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})


export class IconsComponent implements OnInit {
  name: string = '';
  civilsNum: Number=1;
  eventSumVal: string = '';
  soldiersNum: Number=2;
  partNum: Number= 3;
  osnVal: string = '';
  hourVal: string = '';
  dateVal: string = '';
  descriptionVal: string = '';
  landmarkVal: string = '';
  battalionVal: string = '';
  areaVal: string = '';
  brigadeVal: string = '';
  selected_event_type: string = '';

  constructor(private http: HttpClient) {

  }


  ngOnInit() {
  }

 

  subAddForm(){

   let event_manage= '{ "civilsNum":"'+this.civilsNum+
                  '", "eventSumVal":"'+this.eventSumVal+
                  '", "soldiersNum":"'+this.soldiersNum+
                  '", "partNum":"'+this.partNum+
                  '", "osnVal":"'+this.osnVal+
                  '", "hourVal":"'+this.hourVal+
                  '", "dateVal":"'+this.dateVal+
                  '", "descriptionVal":"'+this.descriptionVal+
                  '", "landmarkVal":"'+this.landmarkVal+
                  '", "battalionVal":"'+this.battalionVal+
                  '", "areaVal":"'+this.areaVal+
                  '", "brigadeVal":"'+this.brigadeVal+
                  '", "selectedEventType":"'+this.selected_event_type+'"}';
    let event_manage_json = JSON.parse(event_manage);
    console.log(event_manage_json);

    this.http.post(" http://localhost:3000/events", event_manage_json).subscribe(
      val => {
          console.log("ADD NEW EVENT: POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("ADD NEW EVENT: POST call in error", response);
      },
      () => {
          console.log("ADD NEW EVENT:The POST observable is now completed.");

      }
    );
  }
}
