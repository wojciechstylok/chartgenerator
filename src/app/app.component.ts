import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public chosenChartType: string = 'pie';

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [65, 59.5, 80], label: 'Dataset label' },
  ];

  public chartLabels: Array<any> = ['2019', '2020', '2021'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
