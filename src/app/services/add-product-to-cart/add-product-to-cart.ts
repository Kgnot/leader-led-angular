import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddProductToCart {

  private _message = signal<string | null>(null);

  message = this._message.asReadonly();


  show(productName: string) {
    this._message.set(`Producto "${productName}" añadido a la compra`);
    console.log(productName);
    setTimeout(() => {
      this._message.set(null);
    }, 2500);
  }

}
