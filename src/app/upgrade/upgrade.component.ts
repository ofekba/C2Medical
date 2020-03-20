import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

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
 event_id: number =35;
 event_details: object=undefined;
 

 constructor(private http: HttpClient) {

  }

 ngOnInit() {
   this.http.get("http://localhost:3000/find/events?isOver=true").subscribe(
     val => {
         console.log("EVENT TABLE: GET call successful value returned in body", 
                     val, Object.keys(val).length);
                     for (let i = 0; i < Object.keys(val).length; i++) 
                       this.ItemsArray[i]=val[i];
         
     },
     response => {
         console.log("EVENT TABLE: GET call in error", response);
     },
     () => {
         console.log("EVENT TABLE:The GET observable is now completed.");

     }
   );
 }

 EventDetails(id:number){
  this.http.get("http://localhost:3000/eventHandler/"+id).subscribe(
    val => {
        console.log("EVENT TABLE: GET call successful value returned in body", 
                    val);
        this.event_details=val;
        console.log(this.event_details)
        
    },
    response => {
        console.log("EVENT TABLE: GET call in error", response);
    },
    () => {
        console.log("EVENT TABLE:The GET observable is now completed.");

    }
  );
 
}

show_event_det(){
  if(this.event_details){ //condition for showing the div
    return true;
  }
  else
    return false;
}
}
