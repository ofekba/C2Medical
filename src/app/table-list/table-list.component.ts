import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  // let ItemsArray;
  ItemsArray: any[] = [];

  Caregiver_crew_val: string = '';
  Evacuation_crew_val: string = '';
  Evacuation_target_val: string = '';
  Injury_state_val: string = '';
  Urgent_val: string = '';
  riding_val: string = '';
  def_val: string = '';
  routine_val: string = '';
  Event_outline_val: string = '';
  Injury_mechanism_val: string = '';
  event_id: number =-1;
  

  constructor(private http: HttpClient) {

   }

  ngOnInit() {
    document.getElementById('handel_event_div').hidden = true;
    this.http.get(" http://localhost:3000/events").subscribe(
      val => {
          console.log("EVENT TABLE: GET call successful value returned in body", 
                      val, Object.keys(val).length);
                      for (let i = 0; i < Object.keys(val).length; i++) 
                        this.ItemsArray[i]=val[i];
                      console.log(this.ItemsArray);
          
      },
      response => {
          console.log("EVENT TABLE: GET call in error", response);
      },
      () => {
          console.log("EVENT TABLE:The GET observable is now completed.");

      }
    );
  }

  handleEvent(id){
    console.log("lallaala", id);
    this.event_id=id;
    document.getElementById('handel_event_div').hidden = false;
    document.getElementById('events_table_div').hidden = true;

  }

  clickCancel(){
    document.getElementById('handel_event_div').hidden = true;
    document.getElementById('events_table_div').hidden = false;


  }

  subUpdateForm(){
  
    console.log(this.Caregiver_crew_val, this.Evacuation_crew_val, this.Evacuation_target_val, this.Injury_state_val, this.Urgent_val, this.riding_val, this.def_val, this.routine_val, this.Event_outline_val, this.Injury_mechanism_val);
    let event_haneler= '{ "CaregiverCrewVal":"'+this.Caregiver_crew_val+
                    '", "EvacuationCrewVal":"'+this.Evacuation_crew_val+
                    '", "EvacuationTargetVal":"'+this.Evacuation_target_val+
                    '", "InjuryStateVal":"'+this.Injury_state_val+
                    '", "UrgentVal":"'+this.Urgent_val+
                    '", "ridingVal":"'+this.riding_val+
                    '", "defVal":"'+this.def_val+
                    '", "routineVal":"'+this.routine_val+
                    '", "EventOutlineVal":"'+this.Event_outline_val+
                    '", "id":"'+this.event_id+
                    '", "InjuryMechanismVal":"'+this.Injury_mechanism_val+'"}';

      let event_manage_json = JSON.parse(event_haneler);
      console.log(event_manage_json);

      this.http.post("http://localhost:3000/eventHandler/6", event_manage_json).subscribe(
        val => {
            console.log("ADD NEW EVENT: POST call successful value returned in body", 
                        val);
            document.getElementById('handel_event_div').hidden = true;
            document.getElementById('events_table_div').hidden = false;
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