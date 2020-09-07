// import { Component, OnInit } from '@angular/core';
import { Component,Input } from '@angular/core';
// DUMB/UI COMPONENT
@Component({ //Component Decorator always start with @ 
  selector: 'app-square',
  template: `
    <button>{{ value }}</button>
  `,
  //Had to change scss here cause I used inline style for the board
  styles: [ 
    'button{ width: 100%; height: 100%; font-size: 5em !important;}'
  ]
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
  // Life cycle Hook: Initialize
  // constructor() { }
  // ngOnInit(): void {
  // }

}
