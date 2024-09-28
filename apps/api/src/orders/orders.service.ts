import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

/** Utils */
import { CredixCrediPayApi } from 'src/utils/services/credix-credipay-api';
import { CheckoutService } from 'src/checkout/checkout.service';
import { CheckoutItem } from 'src/checkout_items/entities/checkout_item.entity';

/** Implementation */
@Injectable()
export class OrdersService {
  @Inject(CheckoutService)
  private readonly checkoutService: CheckoutService;

  async createOrder(createOrderDto: CreateOrderDto) {
    const checkoutData = await this.checkoutService.findOne(
      createOrderDto.checkoutId
    );

    const faceValueCents = Math.round(
      (checkoutData.subtotal + checkoutData.tax + checkoutData.shipping) * 100
    );

    const payload = {
      externalId: 'REF-10230456',
      buyerTaxId: '26900161000125',
      sellerTaxId: '37154724000108',
      subtotalAmountCents: checkoutData.subtotal * 100,
      taxAmountCents: checkoutData.tax * 100,
      shippingCostCents: checkoutData.shipping * 100,
      estimatedDeliveryDateUTC: '2024-10-10T00:00:00Z',
      shippingLocation: checkoutData.shippingLocation,
      installments: [
        {
          maturityDate: '2024-10-10T00:00:00Z',
          faceValueCents,
        },
      ],
      items: checkoutData.items.map((checkoutItem: CheckoutItem) => ({
        productId: checkoutItem.productId,
        productName: checkoutItem.productName,
        quantity: checkoutItem.quantity,
        unitPriceCents: 100 * (checkoutItem.quantity * checkoutItem.total),
      })),
    };

    const response = await CredixCrediPayApi.postCreateOrder(payload).then(
      (response) => response.json()
    );

    console.log('Response', response);
    // TODO: Save response in log

    return response;
  }
}
