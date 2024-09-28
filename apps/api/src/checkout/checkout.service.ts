import { Injectable } from '@nestjs/common';
import { Checkout } from './entities/checkout.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CheckoutService {
  constructor(
    @InjectRepository(Checkout)
    private readonly checkoutRepository: Repository<Checkout>
  ) {}

  findAllCheckout(): Promise<Checkout[]> {
    return this.checkoutRepository.find({
      relations: ['items', 'shippingLocation'],
    });
  }

  findOne(id: number) {
    return this.checkoutRepository.findOne({
      relations: ['items', 'shippingLocation'],
      where: {
        id,
      },
    });
  }
}
