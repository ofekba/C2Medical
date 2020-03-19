import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

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
event_id: number = 7;



  constructor(private http: HttpClient) { }

  ngOnInit() {
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
                      '", "InjuryMechanismVal":"'+this.Injury_mechanism_val+'"}';

        let event_manage_json = JSON.parse(event_haneler);
        console.log(event_manage_json);

        this.http.post("http://localhost:3000/eventHandler/6", event_manage_json).subscribe(
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
