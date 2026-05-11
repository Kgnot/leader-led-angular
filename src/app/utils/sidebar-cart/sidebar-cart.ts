import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {CartService} from '../../services/cart-service/cart.service';
import {Observable, Subscription} from 'rxjs';
import {CartItemComponent} from './cart-item/cart-item.component';
import {MsgWsp} from '../../services';
import {BuyConcept} from '../../models/cart/buy-concept';
import {Product} from '../../models/product';
import {SidebarCartService} from '../service/sidebar-cart.service';
import {BlackModalComponent} from '../black-modal/black-modal.component';

@Component({
  selector: 'app-sidebar-cart',
  standalone: true,
  templateUrl: './sidebar-cart.html',
  imports: [CartItemComponent, AsyncPipe, BlackModalComponent],
  styleUrl: './sidebar-cart.scss'
})
export class SidebarCart implements OnInit, OnDestroy {

  visible = false;
  private sub!: Subscription;
  items$!: Observable<BuyConcept[]>;

  constructor(
    private sidebarService: SidebarCartService,
    private cartService: CartService,
    private msgWsp: MsgWsp,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }

  ngOnInit() {
    this.items$ = this.cartService.items$;
    this.sub = this.sidebarService.visible$.subscribe(v => {
      this.visible = v;
    });
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  closeSidebar() {
    this.sidebarService.close();
  }

  onAddItem(product: Product) {
    this.cartService.addItem(product);
  }

  onRemoveItem(product: Product) {
    this.cartService.removeItem(product);
  }

  getTotalItems(items: BuyConcept[]): number {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPower(items: BuyConcept[]): string[] {
    return items.map(item => {
      const powerSpec = item.product.specifications.find(s => s.attributeName === 'Potencia');
      return powerSpec ? powerSpec.value + powerSpec.unit : 'N/A';
    });
  }

  onConsult() {
    const items = this.cartService.getItems();
    if (items.length === 0) return;

    const message = this.buildWhatsAppMessage(items);
    this.msgWsp.sendMessage(message);
  }

  private buildWhatsAppMessage(items: BuyConcept[]): string {
    let message = '¡Hola! Me interesa consultar sobre los siguientes productos:\n\n';

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n`;
      message += `   • Referencia: ${item.product.reference}\n`;
      message += `   • Cantidad: ${item.quantity}\n`;
      const powerSpec = item.product.specifications.find(s => s.attributeName === 'Potencia');
      message += `   • Potencia: ${powerSpec ? powerSpec.value + powerSpec.unit : 'N/A'}\n\n`;
    });

    const totalItems = this.getTotalItems(items);
    const totalPowers: string[] = this.getTotalPower(items);

    message += `Resumen:\n`;
    message += `Total de productos: ${totalItems}\n`;
    message += `Potencias: ${totalPowers.join(', ')}\n\n`;
    message += `¿Podrían brindarme más información?`;

    return message;
  }
}
