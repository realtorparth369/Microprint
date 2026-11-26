import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError, interval } from 'rxjs';
import { map, switchMap, startWith, delay, catchError, publishReplay, refCount } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  // public url = "http://ec2-3-84-99-6.compute-1.amazonaws.com:3001/user";
  public url = "http://ec2-35-175-186-110.compute-1.amazonaws.com:3001/user";
  // public url2 = "http://127.0.0.1:3001/user";

  constructor(
    private http: HttpClient,
    private router: Router) { }



  sendMail(name, company, projectType, emailid, contact, message) {
    const data = { name: name, company: company, projectType: projectType, emailid: emailid, contact: contact, message: message };
    console.log(data);
    return this.http.post(this.url + '/email', data).pipe(
      catchError(this.handleError)
    );
  }

  sendMail2(name, projectType, emailid, contact, message) {
    console.log("heelllllloooo")
    const data = { name: name, projectType: projectType, emailid: emailid, contact: contact, message: message };
    console.log(data);
    return this.http.post(this.url + '/email', data).pipe(
      catchError(this.handleError)
    );
  }


  //Error Showing function
  handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
