import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  // providedIn: 'root'
})
export class ProfileService {


  private username:string;
  private clientid='3dc51f7ff967cb0e6e0e';
  private clientsecret = '7fa79c1f2aea279a11a487161f3632194fe3c903';
  constructor(private http:Http) { }
}
