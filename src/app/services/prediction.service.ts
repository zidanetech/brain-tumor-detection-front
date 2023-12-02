import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  predictionURL = environment.endpoint + "make_prediction/";
  constructor(private http: HttpClient) { }

  makePrediction(data: any) {
    return this.http.post(this.predictionURL, data);
  }
}
