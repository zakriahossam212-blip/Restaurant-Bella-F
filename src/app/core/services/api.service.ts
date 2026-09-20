import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AppData } from '../models/restaurant.model';
import api from '../api.config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private dataUrl = 'data/db.json';

  constructor() {}

  getData(): Observable<AppData> {
    return from(api.get<AppData>(this.dataUrl).then(res => res.data));
  }
}
