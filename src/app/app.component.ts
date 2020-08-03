import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  imgs = ["laptop.jpg", "laptop2.jpg"];
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
