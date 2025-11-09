import { Component } from '@angular/core';
import {Navbar} from '../navbar/navbar';
import {CarritoCompras} from './carrito-compras/carrito-compras';

@Component({
  selector: 'app-header',
  imports: [
    Navbar,
    CarritoCompras
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
