import {Component, ElementRef, ViewChild} from '@angular/core';
import {BarcodeService} from 'src/services/barcodeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'barcode-scanner-sample';
  barcode = 'No barcode read';
  @ViewChild('input')
  input!: ElementRef;

  constructor(public service: BarcodeService) {
    service.scanned.subscribe(
      code => (this.barcode = `Barcode read: ${code}`),
      error => (this.barcode = `Error to read: ${error}`)
    );
  }
}
