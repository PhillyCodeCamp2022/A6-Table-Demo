import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  people = [
    { name: "Pearce", color1: "Orange", color2: "Teal" },
    { name: "Titi", color1: "Pink", color2: "Gray" },
    { name: "Sam", color1: "Green", color2: "Blue" },
    { name: "Earl", color1: "Orange", color2: "Silver" },
    { name: "Darian", color1: "Blue", color2: "Red" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
