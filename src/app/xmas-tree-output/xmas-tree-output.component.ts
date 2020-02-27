import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { XmasTree } from '../xmas-tree';

@Component({
  selector: 'pp-xmas-tree-output',
  templateUrl: './xmas-tree-output.component.html',
  styleUrls: ['./xmas-tree-output.component.scss'],
})
export class XmasTreeOutputComponent implements OnChanges {
  
  @Input() xTree: XmasTree;
  rowsList = [];

  constructor() { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(changes.xTree.previousValue === undefined) {
      this.generateTree();
    } else if(changes.xTree.previousValue.rows !== changes.xTree.currentValue.rows) {
      this.generateTree();
    }
  }

  generateTree() {
    console.log('test');
    this.rowsList = [];
    for (let i = 1; i < (this.xTree.rows - 1) * 2; i += 2) {
      let treeElements: string[] = [];
      for (let j = 0; j < i; j++) {
        treeElements.push('*');
      }
      this.rowsList.push(treeElements);
    }
  }

}
