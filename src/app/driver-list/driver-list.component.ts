import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver.model';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  drivers: Driver[] = [];

  constructor(private driverService: DriverService) { }

  ngOnInit() {
    this.loadDrivers();
  }

  loadDrivers() {
    this.driverService.getDrivers().subscribe(
      (drivers) => {
        this.drivers = drivers;
      },
      (error) => {
        console.log('Error fetching drivers:', error);
      }
    );
  }
}
