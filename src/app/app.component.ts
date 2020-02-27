import { Component, OnInit } from '@angular/core';
import { XmasTree } from './xmas-tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  xTree: XmasTree;

  public showTree(xmasTree: XmasTree){
      this.xTree = new XmasTree(xmasTree.rows, xmasTree.header, xmasTree.footer);
  }   
}