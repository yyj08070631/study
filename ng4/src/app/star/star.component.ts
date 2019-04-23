import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input()
  public rating: number = 0

  public stars: boolean[] = []

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating)
    }
  }

}
