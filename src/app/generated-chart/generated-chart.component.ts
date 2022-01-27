import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Dataset } from 'src/models/Dataset';

@Component({
  selector: 'app-generated-chart',
  templateUrl: './generated-chart.component.html',
  styleUrls: ['./generated-chart.component.scss']
})
export class GeneratedChartComponent {
  @Input() chartType: string = '';
  @Input() chartLabels: string[] = [];
  @Input() chartDatasets: Array<Dataset> = [];

  public chartColors: Array<any> = [];

  constructor() { }

  configureChart() {
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
    if(this.chartType == 'pie') {
      let chartColors: string[] = [];
      this.chartDatasets.forEach(dataset => {
        dataset.data.forEach(data => {
          let index = dataset.data.indexOf(data);
          chartColors.push(bgColors[index]);
        });

        this.chartColors.push( { backgroundColor: chartColors, borderWidth: 2 } )
      });
      chartColors = [];
    }

    let bgRgbaColors = [ 'rgba(247, 70, 74, 0.5)', 'rgba(70, 191, 189, 0.5)', 
      'rgba(253, 180, 92, 0.5)', 'rgba(148, 159, 177, 0.5)', 'rgba(77, 83, 96, 0.5)' ];
    if(this.chartType == 'line') {
      let chartColors: string[] = [];
      this.chartDatasets.forEach(dataset => {
        let index = this.chartDatasets.indexOf(dataset);

        this.chartColors.push( { backgroundColor: bgRgbaColors[index], borderWidth: 2 } )
      });
      chartColors = [];
    }
  }

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
