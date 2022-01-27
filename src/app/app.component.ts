import { Component } from '@angular/core';
import { Dataset } from '../models/Dataset';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public chosenChartType: string = 'bar';
  public labels: string = '';
  public labelToAdd: string = '';
  public datasets: string = '';
  public datasetToAdd: string = '';
  public datasetLabelToAdd: string = '';

  private _labels: string[] = [];
  private _datasets: Dataset[] = [];

  onChartTypeSelect(value: string) {
    this.chosenChartType = value;
    console.log(this.chosenChartType);
  }

  addLabel() {
    this._labels.push(this.labelToAdd);
    this.labels += this.labelToAdd;
    if(this.labels.length > 0) this.labels += ', ';

    this.labelToAdd = '';
  }

  clearLabels() {
    this.labelToAdd = '';
    this.labels = '';
    this._labels = [];
  }

  onLabelInput(value: string) {
    this.labelToAdd = value;
  }

  onDatasetInput(value: string) {
    this.datasetToAdd = value;
  }

  onDatasetLabelInput(value: string) {
    this.datasetLabelToAdd = value;
  }

  addDataset() {
    var dataset: Dataset = new Dataset();
    dataset.data = this.datasetToAdd.split(";");
    dataset.label = this.datasetLabelToAdd;

    this._datasets.push(dataset);

    this.datasets += this.datasetToAdd + ' ' + this.datasetLabelToAdd + '\n';
  }

  clearDatasets() {
    this.datasets = '';
    this.datasetToAdd = '';
    this.datasetLabelToAdd = '';
    this._datasets = [];
  }

  // ---------- EXAMPLE CHART THINGS BELOW -----------

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
