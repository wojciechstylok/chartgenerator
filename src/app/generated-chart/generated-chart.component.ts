import { Component, Input, OnInit } from '@angular/core';
import { Dataset } from 'src/models/Dataset';

@Component({
  selector: 'app-generated-chart',
  templateUrl: './generated-chart.component.html',
  styleUrls: ['./generated-chart.component.scss']
})
export class GeneratedChartComponent implements OnInit {
  @Input() chartType: string = '';
  @Input() chartLabels: string[] = [];
  @Input() chartDatasets: Array<Dataset> = [];

  public chartColors: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let bgColors = ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'];
    if(this.chartType == 'bar') {
      let chartColors: string[] = [];
      this.chartDatasets.forEach(dataset => {
        let index = this.chartDatasets.indexOf(dataset);
        dataset.data.forEach(data => {
          chartColors.push(bgColors[index]);
        });

        this.chartColors.push( { backgroundColor: chartColors, borderWidth: 2 } )

        chartColors = [];

      });
    }
  }

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
