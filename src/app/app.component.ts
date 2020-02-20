import { Component, OnInit } from '@angular/core';
import { XmasTree } from './xmas-tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rows: number;
  header: string;
  footer: string;

  public showTree(xmasTree: XmasTree){
    this.rows = xmasTree.rows;
    this.header = xmasTree.header;
    this.footer = xmasTree.footer;
  }   
}