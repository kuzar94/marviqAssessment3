import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
@Component({
  selector: "app-assignment-a",
  templateUrl: "./assignment-a.component.html",
  styleUrls: ["./assignment-a.component.css"]
})
export class AssignmentAComponent implements OnInit {
  constructor(private data: DataService) {}
  machineData: Object;
  statusData: Object;
  colorStyle: boolean = true;

  ngOnInit() {
    // downloading data from the API
    this.data.getMachineData().subscribe(fetchedMachineData => {
      this.machineData = fetchedMachineData;
      console.log(this.machineData);
    });
    this.data.getStatusData().subscribe(fetchedStatusData => {
      this.statusData = fetchedStatusData;
    });
  }

  // function that returns arrays
  getHourData(hourData) {
    // console.log(
    //   Object.keys(hourData)
    //     .filter(function(k) {
    //       return /^H/.test(k);
    //     })
    //     .map(function(k) {
    //       return [k, hourData[k]];
    //     })
    // );
    Object.keys(hourData)
      .filter(function(k) {
        return /^H/.test(k);
      })
      .map(function(k) {
        return [k, hourData[k]];
      });
  }
}
