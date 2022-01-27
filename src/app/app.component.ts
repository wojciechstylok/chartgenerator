import { Component } from '@angular/core';
import { Dataset } from '../models/Dataset';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public chosenChartType: string = '';
  public labels: string = '';
  public labelToAdd: string = '';
  public datasets: string = '';
  public datasetToAdd: string = '';
  public datasetLabelToAdd: string = '';

  public _labels: string[] = [];
  public _datasets: Dataset[] = [];
  public generate: boolean = false;

  onChartTypeSelect(value: string) {
    this.chosenChartType = value;
    this.generate = true;
  }

  addLabel() {
    this._labels.push(this.labelToAdd);
    this.labels += this.labelToAdd;
    if(this.labels.length > 0) this.labels += ', ';

    this.labelToAdd = '';
    this.chosenChartType = '';
    this.generate = false;
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

    this.datasetToAdd = '';
    this.datasetLabelToAdd = '';
    this.chosenChartType = '';
    this.generate = false;
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
