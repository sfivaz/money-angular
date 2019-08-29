import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'm-confirm-delete',
  templateUrl: './confirm-delete.component.html'
})
export class ConfirmDeleteComponent implements OnInit {

  visible: boolean = false;
  elementId: number;
  @Input() element: string;
  @Output() onConfirm = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  open(id: number) {
    this.visible = true;
    this.elementId = id;
  }

  close() {
    this.visible = false;
  }

  confirm() {
    this.onConfirm.emit(this.elementId);
    this.visible = false;
  }
}
