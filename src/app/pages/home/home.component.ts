import { Component, OnInit } from '@angular/core';
import * as LR from "@uploadcare/blocks";
import { PredictionService } from 'src/app/services/prediction.service';


LR.registerBlocks(LR);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  files: any[] = [];
  selectedFile: any;
  status = {
    loading: false,
    error: false
  };
  prediction: any;
  constructor(private predictionService: PredictionService) { }

  ngOnInit(): void {
  }


  // Help to catch image and save they
  handleUploaderEvent(e: Event) {
    const { data: files } = (e as CustomEvent).detail;
    this.files = files;
    console.log(this.files);    
  }


  selectImageToScanne(file: any) {
    this.selectedFile = file;
  }


  reset() {
    this.selectedFile = undefined;
    this.prediction = undefined;
  }


  lunchAnalysis() {
    this.status.loading = true;
    this.status.error = false;
    this.predictionService.makePrediction({img: this.selectedFile.cdnUrl}).subscribe(
      (s) => {
        console.log(s);    
        this.prediction = s;    
        this.status.loading = false;
      }, (e) => {
        console.log(e);        
        this.status.loading = false;        
        this.status.error = true;
      }
    );
  }

}
