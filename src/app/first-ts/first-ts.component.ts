import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-ts',
  templateUrl: './first-ts.component.html',
  styleUrls: ['./first-ts.component.css']
})
export class FirstTsComponent implements OnInit {
  coSo = [
    {
      id: 'k1',
      name: 'Quán Sứ'
    },
    {
      id: 'k2',
      name: 'Tam Hiệp'
    },
    {
      id: 'k3',
      name: 'Tân Triều'
    },
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
}
