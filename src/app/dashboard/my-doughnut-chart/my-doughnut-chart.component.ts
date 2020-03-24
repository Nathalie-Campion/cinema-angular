import { Component, OnInit, Input } from '@angular/core';
// import { Chart} from 'chart.js';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.scss']
})
export class MyDoughnutChartComponent implements OnInit {

  @Input() nbacteur;
  @Input() nbactrice;

  public doughnutChartLabels = ['femme', 'homme'];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';



  constructor() { }

  ngOnInit(): void {
    this.doughnutChartData = [this.nbactrice, this.nbacteur];
    
  }

}
