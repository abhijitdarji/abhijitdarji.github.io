import { Component, OnDestroy, OnInit } from '@angular/core';
import { Portfolio } from 'src/models/Portfolio';
import { AppService } from './app.service';
// import * as resumeData from '../data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'resume';
  data: Portfolio | undefined;
  scrollTop: number = 0;

  constructor(private _svc: AppService) {
    // this.data = resumeData;
  }


  ngOnInit(): void {
    this._svc.getData().subscribe(_data => this.data = _data);
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event: any): void => {
    this.scrollTop = event.srcElement.scrollingElement.scrollTop;;
  };

  navigate(hash: any) {
    window.location.href = window.location.origin + "/" + hash;
  }
}
