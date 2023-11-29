import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CausesService } from '../causes.service';
import { ICause } from '../shared/interfaces/cause';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent {
  @ViewChild('amountInput', { static: false }) amountInput!: ElementRef<HTMLInputElement>;
  get selectedCause() {return this.causesService.selectedCause}

  @Input() selectedCause2!: ICause;
  get color() {
    if (this.selectedCause.collectedAmount >= this.selectedCause.neededAmount) {
      return 'green';
    }
    if (
      this.selectedCause.collectedAmount < 2 * (this.selectedCause.neededAmount / 3) &&
      this.selectedCause.collectedAmount > (this.selectedCause.neededAmount / 3)
    ) {
      return 'yellow';
    }
    return 'red';
  }
  constructor(private causesService: CausesService) {}

  makeDonationhandler() {
    this.causesService.donate(+this.amountInput.nativeElement.value).subscribe(() => {
      this.causesService.loadCauses();
      this.amountInput.nativeElement.value = '';
    });
  }
}
