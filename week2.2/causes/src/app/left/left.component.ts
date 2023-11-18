import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICause } from '../shared/interfaces/cause';
import { CausesService } from '../causes.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent {

  causes!: ICause[];

  constructor(private causesService: CausesService) {
    causesService.loadCauses();
  }

  ngOnInit() {
    this.causesService.loadCauses();
  }
}
