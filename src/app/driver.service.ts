import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from './driver.model';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private apiUrl = 'http://localhost:5185/api/drivers';

  constructor(private http: HttpClient) { }

  getDrivers() {
    return this.http.get<Driver[]>(this.apiUrl);
  }
}
