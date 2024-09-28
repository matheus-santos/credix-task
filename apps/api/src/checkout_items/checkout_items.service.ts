import { Injectable } from '@nestjs/common';
import { CreateCheckoutItemDto } from './dto/create-checkout_item.dto';
import { UpdateCheckoutItemDto } from './dto/update-checkout_item.dto';

@Injectable()
export class CheckoutItemsService {
  create(createCheckoutItemDto: CreateCheckoutItemDto) {
    return 'This action adds a new checkoutItem';
  }

  findAll() {
    return `This action returns all checkoutItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checkoutItem`;
  }

  update(id: number, updateCheckoutItemDto: UpdateCheckoutItemDto) {
    return `This action updates a #${id} checkoutItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkoutItem`;
  }
}
