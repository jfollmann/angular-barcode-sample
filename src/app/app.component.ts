/* eslint-disable no-undef */
import {Component, ElementRef, ViewChild} from '@angular/core';
import {BarcodeScannerService} from 'src/services/barcodeScannerService';

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

  constructor() {
    const barcodeScanner = new BarcodeScannerService();

    barcodeScanner.scanned.subscribe(
      code => (this.barcode = `Barcode read: ${code}`),
      error => (this.barcode = `Error to read: ${error}`)
    );
  }
}
