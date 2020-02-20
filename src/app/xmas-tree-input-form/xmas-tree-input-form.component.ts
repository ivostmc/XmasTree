import { Component, EventEmitter, Output } from '@angular/core';
import { XmasTree } from '../xmas-tree';

@Component({
  selector: 'app-xmas-tree-input-form',
  templateUrl: './xmas-tree-input-form.component.html',
  styleUrls: ['./xmas-tree-input-form.component.scss']
})
export class XmasTreeInputFormComponent {

  @Output() numRows = new EventEmitter<XmasTree>();
  model = new XmasTree();

  onSubmit() {
    this.numRows.emit(this.model);
  }

}
