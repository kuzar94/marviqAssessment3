import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}
  getMachineData() {
    return this.http.get(
      "https://www.marviq.com/assessment/index.php?page=a&from=2018-01-07%2000:00:00"
    );
  }
  getStatusData() {
    return this.http.get(
      "https://www.marviq.com/assessment/index.php?page=b&from=2018-01-07%2000:00:00"
    );
  }
}
