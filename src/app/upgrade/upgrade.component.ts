import { Component, OnInit } from '@angular/core';

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



  constructor() { }

  ngOnInit() {
  }

  subUpdateForm(){
  
      console.log(this.Caregiver_crew_val, this.Evacuation_crew_val, this.Evacuation_target_val, this.Injury_state_val, this.Urgent_val, this.riding_val, this.def_val, this.routine_val, this.Event_outline_val, this.Injury_mechanism_val);
  
    }

}
