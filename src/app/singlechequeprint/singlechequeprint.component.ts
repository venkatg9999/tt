import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-singlechequeprint',
  templateUrl: './singlechequeprint.component.html',
  styleUrls: ['./singlechequeprint.component.css']
})
export class SinglechequeprintComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
  ngAfterViewInit() {
console.log(this.data)
var a=this.data
// this.router.navigate(['/vendorcheckdetails',a.Name]);

    }
  ngOnInit() {
    this.route.params.subscribe(params => {
       this.data = JSON.parse(params['data']); // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.

    });
    var a=this.data
    this.http.get('http://13.232.165.2:3000/statusupdate?chequeid='+a.chequeid).subscribe(data => {
          //console.log(data);
          this.data=data;
          console.log(this.data);

        });
        window.print()

  }

}
