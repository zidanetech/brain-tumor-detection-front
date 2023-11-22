import { Component, OnInit } from '@angular/core';
import * as LR from "@uploadcare/blocks";

LR.registerBlocks(LR);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  files: any[] = [];
  selectedFile: any;

  constructor() { }

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

}
