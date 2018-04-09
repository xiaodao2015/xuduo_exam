import { Component, OnInit, Input } from '@angular/core';
import  {Hero} from '../app-test-heroes/hero';

@Component({
  selector: 'app-app-test-detail',
  templateUrl: './app-test-detail.component.html',
  styleUrls: ['./app-test-detail.component.css']
})
export class AppTestDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
