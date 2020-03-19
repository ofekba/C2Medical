import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

@Component({
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  // let ItemsArray;
  ItemsArray: any[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(" http://localhost:3000/events").subscribe(
      val => {
        console.log("EVENT TABLE: GET call successful value returned in body",
          val, Object.keys(val).length);
        for (let i = 0; i < Object.keys(val).length; i++)
          this.ItemsArray[i] = val[i];
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

}