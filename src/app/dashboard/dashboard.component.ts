import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };

  constructor(private http: HttpClient) { }

  isOverFalseLength: number;
  isOverTrueLength: number;
  numberCasesInDay1: number;
  numberCasesInDay2: number;
  numberCasesInDay3: number;
  numberCasesInDay4: number;
  numberCasesInDay5: number;
  numberCasesInDay6: number;
  numberCasesInDay7: number;

  ngOnInit() {
    this.http.get(" http://localhost:3000/find/events?isOver=false").subscribe(
      val => {
          console.log("EVENT TABLE: GET call successful value returned in body", 
                      val);
                      this.isOverFalseLength = Object.keys(val).length;
      },
      response => {
          console.log("EVENT TABLE: GET call in error", response);
      },
      () => {
          console.log("EVENT TABLE:The GET observable is now completed.");
      }
    );
    this.http.get(" http://localhost:3000/find/events?isOver=true").subscribe(
      val => {
          console.log("EVENT TABLE: GET call successful value returned in body", 
                      val);
                      this.isOverTrueLength = Object.keys(val).length;
      },
      response => {
          console.log("EVENT TABLE: GET call in error", response);
      },
      () => {
          console.log("EVENT TABLE:The GET observable is now completed.");
      }
    );
    this.http.get(" http://localhost:3000/find/events?dateVal="+date11).subscribe(
      val => {
          console.log("EVENT TABLE: GET call successful value returned in body", 
                      val);
                      this.numberCasesInDay1 = Object.keys(val).length;
      },
      response => {
          console.log("EVENT TABLE: GET call in error", response);
      },
      () => {
          console.log("EVENT TABLE:The GET observable is now completed.");
      }
    );
    this.http.get(" http://localhost:3000/find/events?dateVal="+date22).subscribe(
      val => {
          console.log("EVENT TABLE: GET call successful value returned in body", 
                      val);
                      this.numberCasesInDay2 = Object.keys(val).length;
      },
      response => {
          console.log("EVENT TABLE: GET call in error", response);
      },
      () => {
          console.log("EVENT TABLE:The GET observable is now completed.");
      }
    );
    this.http.get(" http://localhost:3000/find/events?dateVal="+date33).subscribe(
      val => {
          console.log("EVENT TABLE: GET call successful value returned in body", 
                      val);
                      this.numberCasesInDay3 = Object.keys(val).length;
      },
      response => {
          console.log("EVENT TABLE: GET call in error", response);
      },
      () => {
          console.log("EVENT TABLE:The GET observable is now completed.");
      }
    );
    this.http.get(" http://localhost:3000/find/events?dateVal="+date44).subscribe(
      val => {
          console.log("EVENT TABLE: GET call successful value returned in body", 
                      val);
                      this.numberCasesInDay4 = Object.keys(val).length;
      },
      response => {
          console.log("EVENT TABLE: GET call in error", response);
      },
      () => {
          console.log("EVENT TABLE:The GET observable is now completed.");
      }
    );
    this.http.get(" http://localhost:3000/find/events?dateVal="+date55).subscribe(
      val => {
          console.log("EVENT TABLE: GET call successful value returned in body", 
                      val);
                      this.numberCasesInDay5 = Object.keys(val).length;
      },
      response => {
          console.log("EVENT TABLE: GET call in error", response);
      },
      () => {
          console.log("EVENT TABLE:The GET observable is now completed.");
      }
    );
    this.http.get(" http://localhost:3000/find/events?dateVal="+date66).subscribe(
      val => {
          console.log("EVENT TABLE: GET call successful value returned in body", 
                      val);
                      this.numberCasesInDay6 = Object.keys(val).length;
      },
      response => {
          console.log("EVENT TABLE: GET call in error", response);
      },
      () => {
          console.log("EVENT TABLE:The GET observable is now completed.");
      }
    );
    this.http.get(" http://localhost:3000/find/events?dateVal="+date77).subscribe(
      val => {
          console.log("EVENT TABLE: GET call successful value returned in body", 
                      val);
                      this.numberCasesInDay7 = Object.keys(val).length;
      },
      response => {
          console.log("EVENT TABLE: GET call in error", response);
      },
      () => {
          console.log("EVENT TABLE:The GET observable is now completed.");
      }
    );
    var date11 = new Date();
    date11.setDate(date11.getDate() - 1);
    console.log(date11);
    var date22 = new Date();
    date22.setDate(date22.getDate() - 2);
    console.log(date22);
    var date33 = new Date();
    date33.setDate(date33.getDate() - 3);
    var date44 = new Date();
    date44.setDate(date44.getDate() - 4);
    var date55 = new Date();
    date55.setDate(date55.getDate() - 5);
    var date66 = new Date();
    date66.setDate(date66.getDate() - 6);
    var date77 = new Date();
    date77.setDate(date77.getDate() - 7);
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      const dataDailySalesChart: any = {
          labels: ['13/3','14/3', '15/3', '16/3', '17/3', '18/3', '19/3'],
          series: [
            [2, 3, 1, 4, 3, 2, 3]
          ]
          /*
          series: [
              [this.numberCasesInDay7, this.numberCasesInDay6, this.numberCasesInDay5, this.numberCasesInDay4, this.numberCasesInDay3, this.numberCasesInDay2, this.numberCasesInDay1]
          ]*/
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 5, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);

      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var datawebsiteViewsChart = {
        labels: ['13/3','14/3', '15/3', '16/3', '17/3', '18/3', '19/3'],
        series: [
          [2, 3, 1, 4, 3, 2, 1]
        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 5,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
  }

}
