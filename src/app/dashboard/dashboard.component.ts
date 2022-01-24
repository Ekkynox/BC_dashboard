import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { APIStatsData } from '../models/types';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  recurrence!: number;

  constructor(private http: HttpClient, private authServ: AuthService) {
    this.getStats();
  }

  ngOnInit(): void {
  }

  getStats() {
    let httpHeaders = new HttpHeaders({
      "Authorization": this.authServ.token,
      "Content-Type": "application/json"
    });

    lastValueFrom(this.http.get<APIStatsData>("https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/stats/2001/2021", { headers: httpHeaders }))
      .then(res => { this.recurrence = res.recurrence })
  }

}
