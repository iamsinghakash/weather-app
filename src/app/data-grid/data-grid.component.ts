import { Component, OnInit, Input } from '@angular/core';
class ColumnModel{
  headerText: string;
  dataKey: string;
  template?: any;
}

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.less']
})
export class DataGridComponent implements OnInit {

  constructor() { }
  @Input() columns: Array<ColumnModel>;
  @Input() records: Array<any>;
  ngOnInit() {
  }

}
