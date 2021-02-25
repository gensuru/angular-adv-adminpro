import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() title: string = 'Sin Tiulo';

  @Input('labels') doughnutChartLabels: Label[] = ['Pan', 'Refresco', 'Tacos'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];

  public colors: Color[] = [
    {backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
