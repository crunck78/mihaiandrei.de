import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  imgs = ["laptop.jpg", "laptop2.jpg"];
  headLines = ["lorem", "lorem2"];
  currentImg = 0;
  showImg = true;
  ngOnInit() {
    this.updateImg();
  }

  updateImg() {
    setInterval(() =>{
      this.currentImg++;
      this.currentImg = this.currentImg % this.imgs.length;
      this.showImg = false;
      setInterval(() => {
        this.showImg = true;
      }, 100);
    }, 8000);
  }

}
