import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-so-lieu',
  templateUrl: './so-lieu.component.html',
  styleUrls: ['./so-lieu.component.css']
})
export class SoLieuComponent implements OnInit {
  abc = [];
  id: any;
  soLieuthongke = [
    {
      id: 1,
      name: 'k1',
      working: 20,
      done: 30
    },
    {
      id: 2,
      name: 'k2',
      working: 20,
      done: 30
    },
    {
      id: 3,
      name: 'k3',
      working: 20,
      done: 30
    },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.abc = this.soLieuthongke.filter(ft => ft.name === this.id);

  }


}
