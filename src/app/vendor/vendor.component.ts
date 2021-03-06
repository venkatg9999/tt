import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  displayedColumns = [ 'Name', 'Pending Amount', 'Paid Amount','View'];
  dataSource: MatTableDataSource<UserData>;
  //
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  go(name){

    console.log("event started "+JSON.stringify(name))
    this.router.navigate(['/vendorcheckdetails', name.Name]);

  }
  constructor(private http: HttpClient,private router: Router) {
    // Create 100 users
    const users: UserData[] = [];
    //  for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }
    this.map = new Map();

    // Assign the data to the data source for the table to render


    this.http.get('http://13.232.165.2:3000/vendordetails').subscribe(data => {
      //console.log(data);
      this.data=data;
      for(var t=0;t<data.length;t++){
        users.push(data[t])

      }
      this.dataSource = new MatTableDataSource(users);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    //  console.log("sdfsd "+this.dataSource)


    }); }

  ngOnInit() {



}//
applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}

}
export interface UserData {
  Name: string;
  Pending: string;
  Paid: string;

}
