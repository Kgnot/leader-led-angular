import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, AsyncPipe } from '@angular/common';
import { CartService } from '../../services/cart-service/cart.service';
import { Observable } from 'rxjs';
import { CartItemComponent } from './cart-item/cart-item.component';
import { MsgWsp } from '../../services';
import { BuyConcept } from '../../models/cart/buy-concept';
import { Product } from '../../models/product';

@Component({
  selector: 'app-sidebar-cart',
  standalone: true,
  templateUrl: './sidebar-cart.html',
  imports: [CartItemComponent, AsyncPipe],
  styleUrl: './sidebar-cart.scss'
})
export class SidebarCart implements OnInit, OnChanges, OnDestroy {
  @Input() visible = false;
  @Output() close = new EventEmitter<void>();
  @Output() consult = new EventEmitter<void>();

  items$!: Observable<BuyConcept[]>;

  constructor(
    private cartService: CartService,
    private msgWsp: MsgWsp,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.items$ = this.cartService.items$;
    this.toggleBodyScroll(this.visible);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible']) {
      this.toggleBodyScroll(this.visible);
    }
  }

  ngOnDestroy(): void {
    this.toggleBodyScroll(false);
  }

  private toggleBodyScroll(disable: boolean) {
    if (!isPlatformBrowser(this.platformId)) return; // ⛔ proteger SSR

    const body = document.body;
    if (disable) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }

  closeSidebar() {
    this.close.emit();
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

  getTotalPower(items: BuyConcept[]): number[][] {
    return items.map(item => item.product.power);
  }

  onConsult() {
    const items = this.cartService.getItems();
    if (items.length === 0) return;

    const message = this.buildWhatsAppMessage(items);
    this.msgWsp.sendMessage(message);
    this.consult.emit();
  }

  private buildWhatsAppMessage(items: BuyConcept[]): string {
    let message = '¡Hola! Me interesa consultar sobre los siguientes productos:\n\n';

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.marketName}\n`;
      message += `   • Referencia: ${item.product.reference}\n`;
      message += `   • Cantidad: ${item.quantity}\n`;
      message += `   • Potencia: ${item.product.power}W\n\n`;
    });

    const totalItems = this.getTotalItems(items);
    const totalPower:number[][] = this.getTotalPower(items);

    message += `Resumen:\n`;
    message += `Total de productos: ${totalItems}\n`;
    message += `Potencia total: ${totalPower}W\n\n`;
    message += `¿Podrían brindarme más información?`;

    return message;
  }
}
